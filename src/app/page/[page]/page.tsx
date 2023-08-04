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
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;

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
