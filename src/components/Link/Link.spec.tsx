import { fireEvent, render, screen } from '@testing-library/react';

import { Link } from './Link';

describe('Link', () => {
  it('should render the component with the correct text and passed attributes', () => {
    const href = 'https://www.example.com';
    const linkText = 'Example Link';

    render(<Link href={href}>{linkText}</Link>);

    const linkElement = screen.getByRole('link', { name: linkText });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', href);
  });

  it('should accept other passed attributes', () => {
    const target = '_blank';

    render(
      <Link href="https://www.example.com" target={target}>
        Example Link
      </Link>
    );

    const linkElement = screen.getByRole('link');

    expect(linkElement).toHaveAttribute('target', target);
  });

  it('should call a callback function when clicked', () => {
    const onClick = jest.fn();

    render(
      <Link href="https://www.example.com" onClick={onClick}>
        Example Link
      </Link>
    );

    const linkElement = screen.getByRole('link');

    fireEvent.click(linkElement);

    expect(onClick).toHaveBeenCalled();
  });

  it('should render the child content inside a <span> tag', () => {
    render(
      <Link href="https://www.example.com">
        <span>Example Link</span>
      </Link>
    );

    const spanElement = screen.getByText('Example Link');

    expect(spanElement).toBeInTheDocument();
  });
});
