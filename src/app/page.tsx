import { Metadata } from 'next';

import { siteConfig } from '@/config';
import { ArticleDetailService } from '@/services/PostService/ArticleDetailService';

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

export default async function Home() {
  const articles = await ArticleDetailService.getArticles();

  return (
    <main>
      <Profile items={siteConfig} />
      <PostsList posts={articles} />
    </main>
  );
}
