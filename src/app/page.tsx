import { ArticleService } from '@/services/ArticleService';

import { ArticleList } from '@/components/ArticleList';
import { Profile } from '@/components/Profile';

export default async function Home() {
  const articles = await ArticleService.getArticles();

  return (
    <main>
      <Profile />
      <ArticleList articles={articles} />
    </main>
  );
}
