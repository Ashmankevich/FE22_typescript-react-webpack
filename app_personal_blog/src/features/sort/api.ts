import { baseUrl } from '../../../src/api/config';
import { SortResponse } from './types';

export namespace SortApi {
  export async function getSortPosts(params: {
    text: string;
  }): Promise<SortResponse> {
    try {
      const result = await fetch(
        `${baseUrl}blog/posts/?limit=22&ordering=${params.text}`
      );
      if (!result.ok) {
        const errorText = await result.text();
        throw new Error(errorText);
      }
      return result.json();
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
