import { BlogPost } from '@/types';

import { Grid } from '@/components/Grid';
import { PostCard } from '@/components/PostCard';

type PostsListProps = {
  posts: BlogPost[];
};

export const PostsList = ({ posts }: PostsListProps) => {
  return (
    <Grid sm={1} md={2} lg={3}>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </Grid>
  );
};
