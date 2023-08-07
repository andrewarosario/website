import { paginationPages } from '@/functions';
import { PostService } from '@/services';

import { Pagination } from '@/components/Pagination';
import { PostsList } from '@/components/PostsList';

type PageProps = {
  params: {
    page: string;
  };
};

export default function Page({ params }: PageProps) {
  const currentPage = +params.page;
  const { posts, numberPages } = PostService.getAll({ currentPage });
  const { prevPage, nextPage } = paginationPages(currentPage);

  if (!posts.length) {
    return (
      <div>
        <h2>Não há posts</h2>
      </div>
    );
  }

  return (
    <>
      <PostsList posts={posts} />

      <Pagination
        currentPage={currentPage}
        numberPages={numberPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </>
  );
}
