import { fetchApi } from '@/functions';

import { ArticleIdsService } from './ArticleIdsService';

jest.mock('../../functions/fetch-api/fetch-api');
const fetchApiMock = <jest.Mock>fetchApi;

describe('ArticleIdsService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return the ids of the user associated articles', async () => {
    const mockAssociatedArticles = {
      associated_articles: ['articleId1', 'articleId2']
    };

    fetchApiMock.mockResolvedValueOnce(mockAssociatedArticles);

    const result = await ArticleIdsService.getIds();

    expect(result).toEqual(mockAssociatedArticles.associated_articles);
    expect(fetchApiMock).toHaveBeenCalledTimes(1);
    expect(fetchApiMock).toHaveBeenCalledWith(
      `user/${process.env.MEDIUM_USER_ID}/articles`
    );
  });
});
