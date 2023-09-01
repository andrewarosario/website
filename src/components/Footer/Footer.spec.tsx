import { site } from '@/config';
import { render, screen } from '@testing-library/react';

import { Footer } from './Footer';

describe('Footer', () => {
  it('should render correctly', () => {
    render(<Footer />);

    const title = screen.getByText(site.title);
    const socialMediaSection = screen.getByText(/redes/i);

    expect(title).toBeVisible();
    expect(socialMediaSection).toBeVisible();
  });
});
