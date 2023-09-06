import { NavItem } from '@/types';

import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon
} from '@/components/Icons';

import { site } from './site';

export const socialLinks: NavItem[] = [
  {
    title: 'Linkedin',
    href: site.links.linkedin,
    icon: <LinkedinIcon size={20} />
  },
  {
    title: 'Twitter',
    href: site.links.twitter,
    icon: <TwitterIcon size={20} />
  },
  {
    title: 'Youtube',
    href: site.links.youtube,
    icon: <YoutubeIcon size={20} />
  },
  {
    title: 'Github',
    href: site.links.github,
    icon: <GithubIcon size={20} />
  }
];
