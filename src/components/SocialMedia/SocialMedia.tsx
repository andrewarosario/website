import { site } from '@/config';
import { NavItem } from '@/types';

import { Button } from '../Button';
import * as S from './styles';

type SocialMediaProps = {
  items: NavItem[];
};

export const SocialMedia = ({ items }: SocialMediaProps) => {
  return (
    <S.List>
      <Button href={site.links.blog} target="_blank" rel="noopener noreferrer">
        Blog
      </Button>
      {items.map((item) => (
        <S.Link
          title={item.title}
          key={item.title}
          href={item.href}
          aria-label={item.title}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item?.icon}
        </S.Link>
      ))}
    </S.List>
  );
};
