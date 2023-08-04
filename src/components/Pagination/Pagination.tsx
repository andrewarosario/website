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
  const isFirst = currentPage === 1;
  const isLast = currentPage === numberPages;

  return (
    <>
      <S.Container>
        {!isFirst && (
          <S.Link href={prevPage}>
            <S.PrevPageIcon />
            Página anterior
          </S.Link>
        )}

        <S.Text>
          {currentPage} de {numberPages}
        </S.Text>

        {!isLast && (
          <S.Link href={nextPage}>
            Próxima página
            <S.NextPageIcon />
          </S.Link>
        )}
      </S.Container>
    </>
  );
};
