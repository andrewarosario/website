import { ArticleService } from '@/services/ArticleService';

import { PostsList } from '@/components/PostsList';
import { Profile } from '@/components/Profile';

export default function Home() {
  const posts = ArticleService.getArticles();

  return (
    <main>
      <Profile />
      <PostsList posts={posts} />
    </main>
  );
}
