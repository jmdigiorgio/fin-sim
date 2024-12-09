import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { MoneyInput } from './index';

/**
 * MoneyInput Tests
 * 
 * Comprehensive test suite for the MoneyInput component. These tests ensure
 * that the component correctly handles all valid and invalid input scenarios
 * that users might attempt.
 * 
 * Test coverage includes:
 * - Valid inputs:
 *   - Whole numbers
 *   - Decimal numbers (1 or 2 places)
 *   - Empty input
 * - Invalid inputs:
 *   - Negative numbers
 *   - Letters
 *   - Special characters
 *   - Multiple decimal points
 *   - Too many decimal places
 * 
 * Each test simulates real user interaction using React Testing Library's
 * fireEvent to ensure the component behaves correctly in actual usage.
 */

describe('MoneyInput', () => {
  // Helper function to reduce repetition in tests
  // Creates a fresh component instance with a mock onChange handler
  // Returns both the mock function and input element for testing
  const setupMoneyInput = (initialValue = '') => {
    const mockOnChange = jest.fn();  // Create Jest mock function to track calls
    const { getByRole } = render(  // Render component in virtual DOM
      <MoneyInput 
        value={initialValue} 
        onChange={mockOnChange} 
        placeholder="0.00" 
      />
    );
    const input = getByRole('textbox');  // Find input by its ARIA role
    return { mockOnChange, input };
  };

  // Group all tests for valid input scenarios
  describe('valid inputs', () => {
    // Test case: Users should be able to enter whole numbers
    it('accepts whole numbers', () => {
      const { mockOnChange, input } = setupMoneyInput();
      fireEvent.change(input, { target: { value: '123' } });
      expect(mockOnChange).toHaveBeenCalledWith('123');
    });

    // Test case: Users should be able to enter numbers with two decimal places
    it('accepts decimal numbers up to 2 places', () => {
      const { mockOnChange, input } = setupMoneyInput();
      fireEvent.change(input, { target: { value: '123.45' } });
      expect(mockOnChange).toHaveBeenCalledWith('123.45');
    });

    // Test case: Users should be able to enter numbers with one decimal place
    it('accepts single decimal places', () => {
      const { mockOnChange, input } = setupMoneyInput();
      fireEvent.change(input, { target: { value: '123.4' } });
      expect(mockOnChange).toHaveBeenCalledWith('123.4');
    });

    // Test case: Users should be able to clear the input
    // We start with a value and clear it to simulate real user behavior
    it('accepts empty input', () => {
      const { mockOnChange, input } = setupMoneyInput('123');
      fireEvent.change(input, { target: { value: '' } });
      expect(mockOnChange).toHaveBeenCalledWith('');
    });
  });

  // Group all tests for invalid input scenarios
  describe('invalid inputs', () => {
    // Test case: Component should reject negative numbers
    it('rejects negative numbers', () => {
      const { mockOnChange, input } = setupMoneyInput();
      fireEvent.change(input, { target: { value: '-123' } });
      expect(mockOnChange).not.toHaveBeenCalled();
    });

    // Test case: Component should reject alphabetic characters
    it('rejects letters', () => {
      const { mockOnChange, input } = setupMoneyInput();
      fireEvent.change(input, { target: { value: 'abc' } });
      expect(mockOnChange).not.toHaveBeenCalled();
    });

    // Test case: Component should reject special characters (including currency symbols)
    it('rejects special characters', () => {
      const { mockOnChange, input } = setupMoneyInput();
      fireEvent.change(input, { target: { value: '$123' } });
      expect(mockOnChange).not.toHaveBeenCalled();
    });

    // Test case: Component should reject numbers with multiple decimal points
    it('rejects multiple decimal points', () => {
      const { mockOnChange, input } = setupMoneyInput();
      fireEvent.change(input, { target: { value: '123.45.67' } });
      expect(mockOnChange).not.toHaveBeenCalled();
    });

    // Test case: Component should reject numbers with more than 2 decimal places
    it('rejects more than 2 decimal places', () => {
      const { mockOnChange, input } = setupMoneyInput();
      fireEvent.change(input, { target: { value: '123.456' } });
      expect(mockOnChange).not.toHaveBeenCalled();
    });
  });
}); 