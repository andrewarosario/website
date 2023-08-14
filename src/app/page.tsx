import { Metadata } from 'next';

import { siteConfig } from '@/config';
import { PostService } from '@/services';

import { PostsList } from '@/components/PostsList';
import { Profile } from '@/components/Profile';

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    title: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/image-post.jpeg'
      }
    ]
  },
  robots: 'all',
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/image-post.jpeg`]
  }
};

export default function Home() {
  const posts = PostService.getAll();

  return (
    <main>
      <Profile items={siteConfig} />
      <PostsList posts={posts} />
    </main>
  );
}
