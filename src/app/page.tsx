import { siteConfig } from '@/config';
import { paginationPages } from '@/functions';
import { PostService } from '@/services';

import { Pagination } from '@/components/Pagination';
import { PostsList } from '@/components/PostsList';
import { Profile } from '@/components/Profile';

export default function Home() {
  const { posts, numberPages, currentPage } = PostService.getAll();
  const { prevPage, nextPage } = paginationPages(currentPage);

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
