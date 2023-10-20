import { site } from '@/config';
import { Article } from '@/types';

import { ArticleCard } from '@/components/ArticleCard';
import { Grid } from '@/components/Grid';

import * as S from './styles';

type PostsListProps = {
  posts: Article[];
};

export const PostsList = ({ posts }: PostsListProps) => {
  return (
    <S.Container aria-describedby="last-posts">
      <h2
        id="last-posts"
        className="mb-7 flex items-center justify-between border-b border-b-gray-700 pb-1 text-2xl"
      >
        Últimos posts
        <S.Link href={site.links.blog}>
          Ver mais
          <S.NextPageIcon />
        </S.Link>
      </h2>

      <Grid>
        {posts.map((post) => (
          <ArticleCard key={post.url} article={post} />
        ))}
      </Grid>
    </S.Container>
  );
};
