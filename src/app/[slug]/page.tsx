import { PostService } from '@/services';

type PostPageProps = {
  params: {
    slug: string;
  };
};

export default function PostPage({ params }: PostPageProps) {
  const post = PostService.getBySlug(params.slug);
  return (
    <div>
      <h1>{post?.frontmatter.title}</h1>
    </div>
  );
}
