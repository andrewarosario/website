import { HeaderNav } from '@/types';

import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon
} from '@/components/Icons';

import { siteConfig } from './site';

export const socialLinkConfig: HeaderNav = {
  mainNav: [
    {
      title: 'Linkedin',
      href: siteConfig.links.linkedin,
      icon: <LinkedinIcon size={20} />
    },
    {
      title: 'Twitter',
      href: siteConfig.links.twitter,
      icon: <TwitterIcon size={20} />
    },
    {
      title: 'Youtube',
      href: siteConfig.links.youtube,
      icon: <YoutubeIcon size={20} />
    },
    {
      title: 'Github',
      href: siteConfig.links.github,
      icon: <GithubIcon size={20} />
    }
  ]
};
