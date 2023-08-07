import { BlogPost } from '@/types';

import { Grid } from '@/components/Grid';
import { PostCard } from '@/components/PostCard';

import * as S from './styles';

type PostsListProps = {
  posts: BlogPost[];
};

export const PostsList = ({ posts }: PostsListProps) => {
  const [firstPost, ...restPosts] = posts;
  return (
    <S.Container>
      {firstPost && <PostCard post={firstPost} isMain />}

      <Grid sm={1} md={2} lg={3}>
        {restPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </Grid>
    </S.Container>
  );
};
