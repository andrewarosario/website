export const ArticleService = {
  getIds: async (): Promise<string[]> => {
    const userId = process.env.MEDIUM_USER_ID as string;
    const mediumApi = process.env.MEDIUM_API as string;
    const url = `${mediumApi}user/${userId}/articles`;
    const res = await fetch(url, {
      headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY as string,
        'X-RapidAPI-Host': process.env.RAPIDAPI_HOST as string
      },
      cache: 'force-cache'
    });
    const data = await res.json();
    return data.associated_articles;
  }
};