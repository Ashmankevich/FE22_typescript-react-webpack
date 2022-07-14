import { baseUrl } from '../../../api/config';

export async function postsFetch() {
  try {
    const data = await fetch(`${baseUrl}blog/posts/?limit=40`);
    const { results } = await data.json();
    if (!data.ok) {
      const errorText = await data.text();
      throw new Error(errorText);
    }
    return results;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
