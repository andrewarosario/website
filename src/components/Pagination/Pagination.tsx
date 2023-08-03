import * as S from './styles';

type PaginationProps = {
  currentPage: number;
  numberPages: number;
  prevPage: string;
  nextPage: string;
};

export const Pagination = ({
  currentPage,
  numberPages,
  prevPage,
  nextPage
}: PaginationProps) => {
  return (
    <>
      <S.Container>
        <S.Link href={prevPage}>
          <S.PrevPageIcon />
          Página anterior
        </S.Link>
        <S.Text>
          {currentPage} de {numberPages}
        </S.Text>
        <S.Link href={nextPage}>
          Próxima página
          <S.NextPageIcon />
        </S.Link>
      </S.Container>
    </>
  );
};
