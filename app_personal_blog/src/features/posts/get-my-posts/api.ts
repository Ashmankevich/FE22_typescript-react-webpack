import { baseUrl } from '../../../api/config';
import { Post } from '../../../types/post';

export namespace MyPostsApi {
  export async function MyPostsFetch(params: {
    accessToken: string;
  }): Promise<Post[]> {
    try {
      const result = await fetch(`${baseUrl}blog/posts/my_posts/`, {
        method: 'GET',
        headers: { authorization: `Bearer ${params.accessToken}` },
      });
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
