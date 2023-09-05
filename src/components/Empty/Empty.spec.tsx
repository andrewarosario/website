import { render, screen } from '@testing-library/react';

import { Empty } from './Empty';

describe('Empty', () => {
  it('should render correctly', () => {
    const contentText = 'Test Content';
    render(<Empty>{contentText}</Empty>);

    expect(screen.getByText(contentText)).toBeInTheDocument();
  });

  it('should render with correct structure', () => {
    render(<Empty>Test Content</Empty>);

    expect(screen.getByTestId('empty-container')).toBeInTheDocument();
    expect(screen.getByTestId('empty-content')).toBeInTheDocument();
  });
});
