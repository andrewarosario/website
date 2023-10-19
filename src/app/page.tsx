import { ArticleService } from '@/services/ArticleService';

import { PostsList } from '@/components/PostsList';
import { Profile } from '@/components/Profile';

export default async function Home() {
  const posts = await ArticleService.getArticles();

  return (
    <main>
      <Profile />
      <PostsList posts={posts} />
    </main>
  );
}
