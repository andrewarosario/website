import { ArticleService } from '@/services';

import { ArticleCard } from '@/components/ArticleCard';
import { Grid } from '@/components/Grid';

import * as S from './styles';

export const RecommendedArticles = async () => {
  const articles = await ArticleService.getArticles();
  const recommendedArticles = articles.slice(0, 2);

  return (
    <S.Container>
      <Grid>
        {recommendedArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </Grid>
    </S.Container>
  );
};
