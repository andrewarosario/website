import { NavItem } from '@/types';
import { render, screen } from '@testing-library/react';

import { GithubIcon, YoutubeIcon } from '../Icons';
import { SocialMedia } from './SocialMedia';

const mockItems: NavItem[] = [
  {
    title: 'Youtube',
    href: 'https://youtube.com',
    icon: <YoutubeIcon data-testid="youtube-icon" />
  },
  {
    title: 'Github',
    href: 'https://github.com',
    icon: <GithubIcon data-testid="github-icon" />
  }
];

describe('SocialMedia', () => {
  it('should render links and icons correctly', () => {
    render(<SocialMedia items={mockItems} />);

    const firstLink = screen.getByRole('link', { name: mockItems[0].title });
    const secondLink = screen.getByRole('link', { name: mockItems[1].title });

    const firstIcon = screen.getByTestId('youtube-icon');
    const secondIcon = screen.getByTestId('github-icon');

    expect(firstLink).toHaveAttribute('href', mockItems[0].href);
    expect(secondLink).toHaveAttribute('href', mockItems[1].href);

    expect(firstIcon).toBeVisible();
    expect(secondIcon).toBeVisible();
  });
});
