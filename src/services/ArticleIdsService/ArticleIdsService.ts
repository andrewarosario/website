import { fetchMediumApi } from '@/functions';

type AssociatedArticles = {
  associated_articles: string[];
};

export const ArticleIdsService = {
  getIds: async (): Promise<string[]> => {
    const userId = process.env.MEDIUM_USER_ID as string;
    const url = `user/${userId}/articles`;

    const { associated_articles } = await fetchMediumApi<AssociatedArticles>(
      url
    );
    return associated_articles;
  }
};
