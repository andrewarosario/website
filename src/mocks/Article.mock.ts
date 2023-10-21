import { Article } from '@/types';

export const mockArticles: Article[] = [
  {
    id: '1',
    title: 'My Article Title',
    url: 'https://example.com/article',
    subtitle: 'My Article Subtitle',
    image_url: 'https://example.com/article.jpg',
    tags: ['tag1', 'tag2'],
    published_at: '2023-10-20T12:48:16.652Z'
  },
  {
    id: '2',
    title: 'Test Article',
    url: 'https://example.com/article2',
    subtitle: 'Test subtitle',
    image_url: 'https://example.com/image.jpg',
    tags: ['tag1', 'tag3'],
    published_at: '2023-10-19T12:00:00Z'
  }
];
