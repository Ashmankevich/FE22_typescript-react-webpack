import { baseUrl } from '../../../api/config';
import { Post } from '../../../types/post';
import { GetPostPayload } from './types';

export namespace PostApi {
  export async function getPost(payload: GetPostPayload): Promise<Post> {
    try {
      const result = await fetch(`${baseUrl}blog/posts/${payload.id}`);
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
