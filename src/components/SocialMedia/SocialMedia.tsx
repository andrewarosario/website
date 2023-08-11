import { NavItem } from '@/types';

import { Button } from '../Button';
import * as S from './styles';

type SocialMediaProps = {
  items: NavItem[];
};

export const SocialMedia = ({ items }: SocialMediaProps) => {
  return (
    <S.List>
      <Button>Contato</Button>
      {items.map((item) => (
        <S.ListItem key={item.title}>
          <S.Link href={item.href}>{item?.icon}</S.Link>
        </S.ListItem>
      ))}
    </S.List>
  );
};
