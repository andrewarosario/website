export async function fetchMediumApi<T = unknown>(
  url: RequestInfo | URL,
  init?: RequestInit | undefined
) {
  const data = await fetch(`${process.env.MEDIUM_API}/${url}`, {
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY as string,
      'X-RapidAPI-Host': process.env.RAPIDAPI_HOST as string
    },
    next: { tags: ['medium'] },
    ...init
  });
  const result = await data.json();
  return result as T;
}
