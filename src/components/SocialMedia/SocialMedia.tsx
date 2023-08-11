import { NavItem } from '@/types';

import { Button } from '../Button';
import * as S from './styles';

type SocialMediaProps = {
  items: NavItem[];
};

export const SocialMedia = ({ items }: SocialMediaProps) => {
  return (
    <S.List>
      <Button
        href="https://andrewrosario.medium.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Blog
      </Button>
      {items.map((item) => (
        <S.Link
          title={item.title}
          key={item.title}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item?.icon}
        </S.Link>
      ))}
    </S.List>
  );
};
