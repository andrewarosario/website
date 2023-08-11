import { siteConfig } from '@/config';
import { NavItem } from '@/types';
import { render, screen } from '@testing-library/react';

import { Footer } from './Footer';

const mockItems: NavItem[] = [
  {
    href: '/',
    title: 'Home'
  },
  {
    href: '/about',
    title: 'Sobre mim'
  }
];

describe('Footer', () => {
  it('should render correctly', () => {
    render(<Footer items={mockItems} />);

    const title = screen.getByText(siteConfig.title);
    const socialMediaSection = screen.getByText(/redes/i);
    const siteMapSection = screen.getByText(/sitemap/i);

    expect(title).toBeVisible();
    expect(socialMediaSection).toBeVisible();
    expect(siteMapSection).toBeVisible();
  });
});
