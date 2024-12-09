import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MetadataTag } from './index';

/**
 * MetadataTag Tests
 * 
 * Test suite for the MetadataTag component. These tests verify that the component
 * correctly renders its content and maintains proper accessibility attributes.
 * 
 * Test coverage includes:
 * - Basic rendering
 * - Tooltip integration
 * - Accessibility attributes
 * - Alignment variations
 */

describe('MetadataTag', () => {
  // Helper function to reduce repetition in tests
  const setupMetadataTag = (props = {}) => {
    const defaultProps = {
      label: 'Version',
      tooltip: 'Current version: 2.0.0',
      align: 'left' as const
    };
    return render(<MetadataTag {...defaultProps} {...props} />);
  };

  it('renders the label text', () => {
    setupMetadataTag();
    expect(screen.getByText('Version')).toBeInTheDocument();
  });

  it('includes tooltip text in aria-label', () => {
    setupMetadataTag();
    const tag = screen.getByRole('note');
    expect(tag).toHaveAttribute('aria-label', 'Current version: 2.0.0');
  });

  it('renders with left alignment by default', () => {
    setupMetadataTag();
    const tag = screen.getByRole('note');
    expect(tag).toHaveStyle({ textAlign: 'left' });
  });

  it('renders with center alignment when specified', () => {
    setupMetadataTag({ align: 'center' });
    const tag = screen.getByRole('note');
    expect(tag).toHaveStyle({ textAlign: 'center' });
  });

  it('renders with right alignment when specified', () => {
    setupMetadataTag({ align: 'right' });
    const tag = screen.getByRole('note');
    expect(tag).toHaveStyle({ textAlign: 'right' });
  });

  it('has correct ARIA role', () => {
    setupMetadataTag();
    expect(screen.getByRole('note')).toBeInTheDocument();
  });
}); 