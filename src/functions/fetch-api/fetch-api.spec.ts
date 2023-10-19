import { fetchApi } from './fetch-api';

describe('fetchApi', () => {
  it('should return the response data as JSON', async () => {
    const mockData = {
      title: 'Test title',
      content: 'Test content'
    };

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData)
    });

    const result = await fetchApi('posts/1');

    expect(result).toEqual(mockData);
  });

  it('should throw an error if the request fails', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('Request failed'));

    await expect(fetchApi('posts/1')).rejects.toThrowError('Request failed');
  });

  it('should pass the init object to the fetch function', async () => {
    const mockInit = {
      method: 'GET',
      body: JSON.stringify({
        title: 'New post',
        content: 'This is the content of the new post.'
      })
    };

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({})
    });

    await fetchApi('posts', mockInit);

    expect(global.fetch).toHaveBeenCalledWith(
      `${process.env.MEDIUM_API}/posts`,
      {
        headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
          'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
        },
        next: { tags: ['medium'] },
        ...mockInit
      }
    );
  });
});
