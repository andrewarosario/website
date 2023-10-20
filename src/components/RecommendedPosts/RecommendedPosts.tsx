import { ArticleService } from '@/services';

import { ArticleCard } from '@/components/ArticleCard';
import { Grid } from '@/components/Grid';

import * as S from './styles';

export const RecommendedPosts = async () => {
  const posts = await ArticleService.getArticles();
  const recommendedPosts = posts.slice(0, 2);

  return (
    <S.Container>
      <Grid>
        {recommendedPosts.map((post) => (
          <ArticleCard key={post.url} article={post} />
        ))}
      </Grid>
    </S.Container>
  );
};
