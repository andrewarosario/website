import { allPosts } from 'contentlayer/generated';

import { siteConfig } from '@/config';

import { Grid } from '@/components/Grid';
import { PostCard } from '@/components/PostCard';
import { Profile } from '@/components/Profile';

export default function Home() {
  const posts = allPosts.map((post) => post);

  return (
    <main>
      <div className="my-10">
        <Profile items={siteConfig} />
      </div>

      <Grid sm={1} md={2} lg={3}>
        {posts.map((post) => (
          <PostCard key={post._id} />
        ))}
      </Grid>
    </main>
  );
}
