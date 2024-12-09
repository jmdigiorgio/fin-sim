import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { NumberInput } from './index';

/**
 * NumberInput Tests
 * 
 * Test suite for the NumberInput component. These tests verify that the component
 * correctly handles all valid and invalid input scenarios for whole numbers
 * within a specified range.
 * 
 * Test coverage includes:
 * - Valid inputs:
 *   - Whole numbers within range (0-999 by default)
 *   - Empty input
 *   - Custom min/max ranges
 * - Invalid inputs:
 *   - Negative numbers
 *   - Decimal numbers
 *   - Numbers outside range
 *   - Letters
 *   - Special characters
 */

describe('NumberInput', () => {
  // Helper function to reduce repetition in tests
  const setupNumberInput = (initialValue = '', props = {}) => {
    const mockOnChange = jest.fn();
    const { getByRole } = render(
      <NumberInput 
        value={initialValue} 
        onChange={mockOnChange} 
        placeholder="0"
        {...props}
      />
    );
    const input = getByRole('textbox');
    return { mockOnChange, input };
  };

  // Group all tests for valid input scenarios
  describe('valid inputs', () => {
    it('accepts zero', () => {
      const { mockOnChange, input } = setupNumberInput();
      fireEvent.change(input, { target: { value: '0' } });
      expect(mockOnChange).toHaveBeenCalledWith('0');
    });

    it('accepts whole numbers within default range', () => {
      const { mockOnChange, input } = setupNumberInput();
      fireEvent.change(input, { target: { value: '42' } });
      expect(mockOnChange).toHaveBeenCalledWith('42');
    });

    it('accepts maximum value (999 by default)', () => {
      const { mockOnChange, input } = setupNumberInput();
      fireEvent.change(input, { target: { value: '999' } });
      expect(mockOnChange).toHaveBeenCalledWith('999');
    });

    it('accepts empty input', () => {
      const { mockOnChange, input } = setupNumberInput('50');
      fireEvent.change(input, { target: { value: '' } });
      expect(mockOnChange).toHaveBeenCalledWith('');
    });

    it('accepts numbers within custom range', () => {
      const { mockOnChange, input } = setupNumberInput('', { min: 5, max: 10 });
      fireEvent.change(input, { target: { value: '7' } });
      expect(mockOnChange).toHaveBeenCalledWith('7');
    });
  });

  // Group all tests for invalid input scenarios
  describe('invalid inputs', () => {
    it('rejects negative numbers', () => {
      const { mockOnChange, input } = setupNumberInput();
      fireEvent.change(input, { target: { value: '-42' } });
      expect(mockOnChange).not.toHaveBeenCalled();
    });

    it('rejects decimal numbers', () => {
      const { mockOnChange, input } = setupNumberInput();
      fireEvent.change(input, { target: { value: '42.5' } });
      expect(mockOnChange).not.toHaveBeenCalled();
    });

    it('rejects numbers below minimum (default 0)', () => {
      const { mockOnChange, input } = setupNumberInput();
      fireEvent.change(input, { target: { value: '-1' } });
      expect(mockOnChange).not.toHaveBeenCalled();
    });

    it('rejects numbers above maximum (default 999)', () => {
      const { mockOnChange, input } = setupNumberInput();
      fireEvent.change(input, { target: { value: '1000' } });
      expect(mockOnChange).not.toHaveBeenCalled();
    });

    it('rejects numbers outside custom range', () => {
      const { mockOnChange, input } = setupNumberInput('', { min: 5, max: 10 });
      fireEvent.change(input, { target: { value: '11' } });
      expect(mockOnChange).not.toHaveBeenCalled();
    });

    it('rejects letters', () => {
      const { mockOnChange, input } = setupNumberInput();
      fireEvent.change(input, { target: { value: 'abc' } });
      expect(mockOnChange).not.toHaveBeenCalled();
    });

    it('rejects special characters', () => {
      const { mockOnChange, input } = setupNumberInput();
      fireEvent.change(input, { target: { value: '42#' } });
      expect(mockOnChange).not.toHaveBeenCalled();
    });
  });
}); 