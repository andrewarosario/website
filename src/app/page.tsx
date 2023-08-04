import { siteConfig } from '@/config';
import { PostService } from '@/services';

import { Pagination } from '@/components/Pagination';
import { PostsList } from '@/components/PostsList';
import { Profile } from '@/components/Profile';

export default function Home() {
  const { posts, numberPages, currentPage } = PostService.getAll();
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;

  return (
    <main>
      <div className="my-10">
        <Profile items={siteConfig} />
      </div>

      <PostsList posts={posts} />

      <Pagination
        currentPage={currentPage}
        numberPages={numberPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </main>
  );
}
