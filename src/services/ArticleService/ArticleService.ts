import { fetchApi } from '@/functions';
import { Article } from '@/types';

import { ArticleIdsService } from '../ArticleIdsService/ArticleIdsService';

export const ArticleService = {
  getArticles: async (): Promise<Article[]> => {
    const articleIds = await ArticleIdsService.getIds();
    const lastArticleIds = articleIds.slice(0, 5);
    const urls = lastArticleIds.map((articleId) => `article/${articleId}`);

    const articles = await Promise.all(
      urls.map((url) => fetchApi<Article>(url))
    );
    return articles;
  }
};
