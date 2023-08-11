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

    const firstIcon = screen.getByTestId('youtube-icon');
    const secondIcon = screen.getByTestId('github-icon');

    expect(firstIcon).toBeVisible();
    expect(secondIcon).toBeVisible();
  });
});
