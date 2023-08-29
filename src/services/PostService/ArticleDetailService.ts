import { Article } from '@/types';

import { ArticleService } from './ArticleService';

export const ArticleDetailService = {
  getArticles: async (): Promise<Article[]> => {
    const mediumApi = process.env.MEDIUM_API as string;
    const url = `${mediumApi}article`;

    const articleIds = await ArticleService.getIds();
    const lastArticles = articleIds.slice(0, 5);
    const urls = lastArticles.map((articleId) => `${url}/${articleId}`);

    const fetchData = async (url: string) => {
      const res = await fetch(url, {
        headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY as string,
          'X-RapidAPI-Host': process.env.RAPIDAPI_HOST as string
        },
        cache: 'force-cache'
      });
      const data = await res.json();
      return data;
    };

    const articles = await Promise.all(urls.map((url) => fetchData(url)));
    return articles;
  }
};
