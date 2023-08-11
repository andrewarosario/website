import { HeaderNav } from '@/types';

import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon
} from '@/components/Icons';

export const socialLinkConfig: HeaderNav = {
  mainNav: [
    {
      title: 'Linkedin',
      href: 'https://www.linkedin.com/in/andrewarosario/',
      icon: <LinkedinIcon size={20} />
    },
    {
      title: 'Twitter',
      href: 'https://www.twitter.com/andrewarosario/',
      icon: <TwitterIcon size={20} />
    },
    {
      title: 'Youtube',
      href: 'https://www.youtube.com/andrewrosario/',
      icon: <YoutubeIcon size={20} />
    },
    {
      title: 'Github',
      href: 'https://www.github.com/andrewarosario/',
      icon: <GithubIcon size={20} />
    }
  ]
};
