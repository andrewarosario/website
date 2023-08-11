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
      <h2 className="mb-7 flex items-center justify-between border-b border-b-gray-700 pb-1 text-2xl">
        Últimos posts
        <S.Link href="https://andrewrosario.medium.com">
          Ver mais
          <S.NextPageIcon />
        </S.Link>
      </h2>

      {firstPost && <PostCard post={firstPost} isMain />}

      <Grid sm={1} md={2} lg={3}>
        {restPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </Grid>
    </S.Container>
  );
};
