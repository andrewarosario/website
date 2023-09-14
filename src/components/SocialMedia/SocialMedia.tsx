import Link from 'next/link';

import { site } from '@/config';
import { NavItem } from '@/types';

import { Button } from '../Button';
import * as S from './styles';

type SocialMediaProps = {
  items: NavItem[];
};

export const SocialMedia = ({ items }: SocialMediaProps) => {
  return (
    <nav>
      <S.List>
        <li>
          <Button
            href={site.links.blog}
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </Button>
        </li>
        {items.map((item) => (
          <li key={item.title}>
            <Link
              title={item.title}
              href={item.href}
              aria-label={item.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.SocialMediaItem>{item?.icon}</S.SocialMediaItem>
            </Link>
          </li>
        ))}
      </S.List>
    </nav>
  );
};
