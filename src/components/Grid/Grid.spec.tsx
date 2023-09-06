import { render, screen } from '@testing-library/react';

import { Grid } from './Grid';

describe('Grid', () => {
  it('should render correctly', () => {
    const contentText = 'Test Content';
    render(<Grid>{contentText}</Grid>);

    expect(screen.getByText(contentText)).toBeInTheDocument();
  });
});
