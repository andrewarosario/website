import { notFound } from 'next/navigation';

import { PostService } from '@/services';

import { Post } from '@/components/Post';

type PostPageProps = {
  params: {
    slug: string;
  };
};

export default function PostPage({ params }: PostPageProps) {
  const post = PostService.getBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return <Post post={post} />;
}
