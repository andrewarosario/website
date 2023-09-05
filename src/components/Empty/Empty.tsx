import * as S from './styles';

type EmptyProps = {
  children: React.ReactNode;
};

export const Empty = ({ children }: EmptyProps) => {
  return (
    <S.Container data-testid="empty-container">
      <S.Content data-testid="empty-content">{children}</S.Content>
    </S.Container>
  );
};
