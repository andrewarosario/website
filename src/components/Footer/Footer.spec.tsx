import { site } from '@/config';
import { render, screen } from '@testing-library/react';

import { Footer } from './Footer';

describe('Footer', () => {
  it('should render correctly', () => {
    render(<Footer />);

    const siteTitle = screen.getByText(site.title);
    const socialMediaSection = screen.getByText(/redes/i);
    const logo = screen.getByRole('heading', { level: 2 });
    const socialMediaList = screen.getByRole('list');

    expect(siteTitle).toBeVisible();
    expect(socialMediaSection).toBeVisible();
    expect(logo).toBeVisible();
    expect(socialMediaList).toBeVisible();
  });
});
