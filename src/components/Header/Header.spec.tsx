import { navItems, site } from '@/config';
import { render, screen } from '@testing-library/react';

import { Header } from './Header';

describe('Header', () => {
  it('should render logo', () => {
    render(<Header />);

    const logoText = screen.getByRole('heading', { name: /andrew rosário/i });

    expect(logoText).toBeVisible();
  });

  it('should render nav items', () => {
    render(<Header />);

    const menu = screen.getByRole('menu');

    expect(menu).toBeVisible();
    expect(menu).toHaveTextContent(navItems[0].title);
    expect(menu).toHaveTextContent(navItems[1].title);
    expect(menu).toHaveTextContent(navItems[2].title);
  });

  it('should render blog button with correct href', () => {
    render(<Header />);

    const blogButton = screen.getByRole('button', { name: /artigos/i });
    expect(blogButton).toBeVisible();
    expect(blogButton).toHaveAttribute('href', site.links.blog);
  });
});
