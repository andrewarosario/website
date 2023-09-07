import { render, screen } from '@testing-library/react';

import { Tag } from './Tag';

describe('Tag', () => {
  it('should render the tag with children', () => {
    render(<Tag>Child Tag</Tag>);
    const tagElement = screen.getByText('Child Tag');
    expect(tagElement).toBeVisible();
  });

  it('should render the tag with default size', () => {
    render(<Tag>Hello</Tag>);
    const tagElement = screen.getByText('Hello');
    expect(tagElement).toBeInTheDocument();
    expect(tagElement).toHaveClass('text-sm');
  });

  it('should render the tag with a specified size', () => {
    render(<Tag size="lg">Large</Tag>);
    const tagElement = screen.getByText('Large');
    expect(tagElement).toBeInTheDocument();
    expect(tagElement).toHaveClass('text-lg');
  });
});
