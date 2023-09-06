import { Metadata } from 'next';

import { site } from '@/config';
import { PostService } from '@/services';

import { PostsList } from '@/components/PostsList';
import { Profile } from '@/components/Profile';

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: {
    type: 'website',
    title: site.name,
    url: site.url,
    description: site.description,
    siteName: site.name,
    images: [
      {
        url: '/image-post.jpeg'
      }
    ]
  },
  robots: 'all',
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: [`${site.url}/image-post.jpeg`]
  }
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
