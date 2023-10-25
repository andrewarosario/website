import * as S from './styles';

export type GridProps = {
  children: React.ReactNode;
  threeColumns?: boolean;
};

export const Grid = ({ children, threeColumns = true }: GridProps) => {
  return (
    <S.Container data-testid="grid" threeColumns={threeColumns}>
      {children}
    </S.Container>
  );
};
