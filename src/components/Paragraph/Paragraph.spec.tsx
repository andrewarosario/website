import { render, screen } from '@testing-library/react';

import { Paragraph } from './Paragraph';

describe('Paragraph', () => {
  it('should render paragraph correctly', () => {
    const text = 'Hello, World!';
    render(<Paragraph>{text}</Paragraph>);

    const paragraphElement = screen.getByText(text);

    expect(paragraphElement).toBeVisible();
  });
});
