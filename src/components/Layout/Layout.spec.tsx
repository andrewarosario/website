import { render, screen } from '@testing-library/react';

import { Layout } from './Layout';

describe('Layout', () => {
  it('should render correctly', () => {
    const contentText = 'Test Content';
    render(<Layout>{contentText}</Layout>);

    expect(screen.getByText(contentText)).toBeVisible();
  });
});
