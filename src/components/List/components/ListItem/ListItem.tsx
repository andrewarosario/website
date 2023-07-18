import { LiHTMLAttributes } from 'react';

import * as S from './styles';

type ListItemsProps = LiHTMLAttributes<HTMLLIElement> & {
  children: React.ReactNode;
};

export const ListItem = ({ children, ...rest }: ListItemsProps) => {
  return (
    <>
      <S.Container {...rest}>{children}</S.Container>
    </>
  );
};
