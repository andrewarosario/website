import { fetchMediumApi } from '@/functions';
import { mockArticles } from '@/mocks';

import { ArticleIdsService } from '../ArticleIdsService/ArticleIdsService';
import { ArticleService } from './ArticleService';

jest.mock('../../functions/fetch-medium-api/fetch-medium-api');
jest.mock('../ArticleIdsService/ArticleIdsService');
const fetchMediumApiMock = <jest.Mock>fetchMediumApi;
const getArticleIdsMock = <jest.Mock>ArticleIdsService.getIds;
const [article] = mockArticles;

describe('ArticleService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return the last five articles', async () => {
    const mockArticleIds = [
      'article1',
      'article2',
      'article3',
      'article4',
      'article5',
      'article6',
      'article7'
    ];

    getArticleIdsMock.mockResolvedValueOnce(mockArticleIds);
    fetchMediumApiMock.mockResolvedValue(article);

    const result = await ArticleService.getArticles();

    expect(result).toEqual([article, article, article, article, article]);
    expect(fetchMediumApiMock).toHaveBeenCalledTimes(5);

    mockArticleIds.forEach((id, index) => {
      if (index <= 4) {
        expect(fetchMediumApiMock).toHaveBeenCalledWith(`article/${id}`);
      } else {
        expect(fetchMediumApiMock).not.toHaveBeenCalledWith(`article/${id}`);
      }
    });
  });
});
