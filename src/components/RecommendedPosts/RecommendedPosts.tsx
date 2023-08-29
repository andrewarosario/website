import { ArticleDetailService } from '@/services/PostService/ArticleDetailService';

import { Grid } from '@/components/Grid';

import { PostCard } from '../PostCard';
import * as S from './styles';

export const RecommendedPosts = async () => {
  const articles = await ArticleDetailService.getArticles();
  const recommendedPosts = articles.slice(0, 2);

  return (
    <S.Container>
      <Grid>
        {recommendedPosts.map((post) => (
          <PostCard key={post.url} post={post} />
        ))}
      </Grid>
    </S.Container>
  );
};
