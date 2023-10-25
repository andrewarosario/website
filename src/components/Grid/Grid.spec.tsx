import { render, screen } from '@testing-library/react';

import { Grid } from './Grid';

describe('Grid', () => {
  it('should render correctly', () => {
    const contentText = 'Test Content';
    render(<Grid>{contentText}</Grid>);

    expect(screen.getByText(contentText)).toBeInTheDocument();
  });

  it('should have grid-cols-3 class', () => {
    const contentText = 'Test Content';
    render(<Grid threeColumns>{contentText}</Grid>);
    const grid = screen.getByTestId('grid');
    expect(grid).toHaveClass('2xl:grid-cols-3');
  });

  it('should not have grid-cols-3 class', () => {
    const contentText = 'Test Content';
    render(<Grid threeColumns={false}>{contentText}</Grid>);
    const grid = screen.getByTestId('grid');
    expect(grid).not.toHaveClass('2xl:grid-cols-3');
  });
});
