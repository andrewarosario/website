import { render, screen } from '@testing-library/react';

import { Title } from './Title';

describe('Title', () => {
  it('should render title text correctly', () => {
    const titleText = 'Hello, World!';
    render(<Title>{titleText}</Title>);

    const titleElement = screen.getByRole('heading', { name: titleText });

    expect(titleElement).toBeVisible();
  });
});
