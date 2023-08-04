import { PostService } from '@/services';

import { Grid } from '@/components/Grid';
import { Pagination } from '@/components/Pagination';
import { PostCard } from '@/components/PostCard';

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

  return (
    <>
      <Grid sm={1} md={2} lg={3}>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </Grid>

      <Pagination
        currentPage={currentPage}
        numberPages={numberPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </>
  );
}
