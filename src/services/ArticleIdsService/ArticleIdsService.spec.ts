import { fetchMediumApi } from '@/functions';

import { ArticleIdsService } from './ArticleIdsService';

jest.mock('../../functions/fetch-medium-api/fetch-medium-api');
const fetchMediumApiMock = <jest.Mock>fetchMediumApi;

describe('ArticleIdsService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return the ids of the user associated articles', async () => {
    const mockAssociatedArticles = {
      associated_articles: ['articleId1', 'articleId2']
    };

    fetchMediumApiMock.mockResolvedValueOnce(mockAssociatedArticles);

    const result = await ArticleIdsService.getIds();

    expect(result).toEqual(mockAssociatedArticles.associated_articles);
    expect(fetchMediumApiMock).toHaveBeenCalledTimes(1);
    expect(fetchMediumApiMock).toHaveBeenCalledWith(
      `user/${process.env.MEDIUM_USER_ID}/articles`
    );
  });
});
