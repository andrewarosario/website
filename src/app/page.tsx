import { PostService } from '@/services';

import { PostsList } from '@/components/PostsList';
import { Profile } from '@/components/Profile';

export default function Home() {
  const posts = PostService.getAll();

  return (
    <main>
      <Profile />
      <PostsList posts={posts} />
    </main>
  );
}
