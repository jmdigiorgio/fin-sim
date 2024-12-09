import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { PercentageInput } from './index';

/**
 * PercentageInput Tests
 * 
 * Comprehensive test suite for the PercentageInput component. These tests ensure
 * that the component correctly handles all valid and invalid input scenarios
 * that users might attempt.
 * 
 * Test coverage includes:
 * - Valid inputs:
 *   - Whole numbers between 0-1000
 *   - Empty input
 * - Invalid inputs:
 *   - Negative numbers
 *   - Decimal numbers
 *   - Numbers above 1000
 *   - Letters
 *   - Special characters
 * 
 * Each test simulates real user interaction using React Testing Library's
 * fireEvent to ensure the component behaves correctly in actual usage.
 */

describe('PercentageInput', () => {
  // Helper function to reduce repetition in tests
  const setupPercentageInput = (initialValue = '') => {
    const mockOnChange = jest.fn();
    const { getByRole } = render(
      <PercentageInput 
        value={initialValue} 
        onChange={mockOnChange} 
        placeholder="0" 
      />
    );
    const input = getByRole('textbox');
    return { mockOnChange, input };
  };

  // Group all tests for valid input scenarios
  describe('valid inputs', () => {
    it('accepts zero', () => {
      const { mockOnChange, input } = setupPercentageInput();
      fireEvent.change(input, { target: { value: '0' } });
      expect(mockOnChange).toHaveBeenCalledWith('0');
    });

    it('accepts whole numbers within range', () => {
      const { mockOnChange, input } = setupPercentageInput();
      fireEvent.change(input, { target: { value: '42' } });
      expect(mockOnChange).toHaveBeenCalledWith('42');
    });

    it('accepts maximum value (1000)', () => {
      const { mockOnChange, input } = setupPercentageInput();
      fireEvent.change(input, { target: { value: '1000' } });
      expect(mockOnChange).toHaveBeenCalledWith('1000');
    });

    it('accepts empty input', () => {
      const { mockOnChange, input } = setupPercentageInput('50');
      fireEvent.change(input, { target: { value: '' } });
      expect(mockOnChange).toHaveBeenCalledWith('');
    });
  });

  // Group all tests for invalid input scenarios
  describe('invalid inputs', () => {
    it('rejects negative numbers', () => {
      const { mockOnChange, input } = setupPercentageInput();
      fireEvent.change(input, { target: { value: '-42' } });
      expect(mockOnChange).not.toHaveBeenCalled();
    });

    it('rejects decimal numbers', () => {
      const { mockOnChange, input } = setupPercentageInput();
      fireEvent.change(input, { target: { value: '42.5' } });
      expect(mockOnChange).not.toHaveBeenCalled();
    });

    it('rejects numbers above maximum (1000)', () => {
      const { mockOnChange, input } = setupPercentageInput();
      fireEvent.change(input, { target: { value: '1001' } });
      expect(mockOnChange).not.toHaveBeenCalled();
    });

    it('rejects letters', () => {
      const { mockOnChange, input } = setupPercentageInput();
      fireEvent.change(input, { target: { value: 'abc' } });
      expect(mockOnChange).not.toHaveBeenCalled();
    });

    it('rejects special characters', () => {
      const { mockOnChange, input } = setupPercentageInput();
      fireEvent.change(input, { target: { value: '42%' } });
      expect(mockOnChange).not.toHaveBeenCalled();
    });
  });
}); 