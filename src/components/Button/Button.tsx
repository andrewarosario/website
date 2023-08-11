import { AnchorHTMLAttributes } from 'react';

import * as S from './styles';

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
};

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <S.Container role="button" {...rest}>
      {children}
    </S.Container>
  );
};
