import * as S from './styles';

type GridProps = {
  children: React.ReactNode;
};

export const Grid = ({ children }: GridProps) => {
  return <S.Container>{children}</S.Container>;
};
