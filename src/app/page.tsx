import { Metadata } from 'next';

import { site } from '@/config';
import { PostService } from '@/services';

import { PostsList } from '@/components/PostsList';
import { Profile } from '@/components/Profile';

export const metadata: Metadata = {
  title: site.name,
  description: site.title,
  metadataBase: new URL(site.url),
  openGraph: {
    type: 'website',
    title: site.name,
    url: site.url,
    description: site.title,
    siteName: site.name,
    images: [
      {
        url: '/image-post.jpeg'
      }
    ]
  },
  robots: 'all'
};

export default function Home() {
  const posts = PostService.getAll();

  return (
    <main>
      <Profile />
      <PostsList posts={posts} />
    </main>
  );
}
