import { site } from '@/config';
import { Article } from '@/types';

import { ArticleCard } from '@/components/ArticleCard';
import { Grid } from '@/components/Grid';

import * as S from './styles';

type ArticleListProps = {
  articles: Article[];
};

export const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <S.Container aria-describedby="last-articles">
      <S.Heading id="last-articles">
        Últimos artigos
        <S.Link href={site.links.blog}>
          Ver mais
          <S.LinkIcon />
        </S.Link>
      </S.Heading>

      <Grid>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </Grid>
    </S.Container>
  );
};
