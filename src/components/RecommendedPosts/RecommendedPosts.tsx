import { PostService } from '@/services';

import { Grid } from '@/components/Grid';
import { PostCard } from '@/components/PostCard';

import * as S from './styles';

export const RecommendedPosts = () => {
  const posts = PostService.getAll();
  const recommendedPosts = posts.slice(0, 2);

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
