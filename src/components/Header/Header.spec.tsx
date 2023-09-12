import { navItems, site } from '@/config';
import { render, screen } from '@testing-library/react';

import { Header } from './Header';

describe('Header', () => {
  it('should render logo Logo', () => {
    render(<Header />);

    const logoText = screen.getByRole('heading', { name: /andrew rosário/i });

    expect(logoText).toBeVisible();
  });

  it('should render nav items', () => {
    render(<Header />);

    const list = screen.getByRole('list');

    expect(list).toBeVisible();
    expect(list).toHaveTextContent(navItems[0].title);
    expect(list).toHaveTextContent(navItems[1].title);
    expect(list).toHaveTextContent(navItems[2].title);
  });

  it('should render blog button with correct href', () => {
    render(<Header />);

    const blogButton = screen.getByRole('button', { name: /artigos/i });
    expect(blogButton).toBeVisible();
    expect(blogButton).toHaveAttribute('href', site.links.blog);
  });
});
