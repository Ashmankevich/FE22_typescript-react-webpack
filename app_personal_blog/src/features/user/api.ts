import { baseUrl } from '../../api/config';
import { UserResponse } from './types';

export namespace UserApi {
  export async function getInfo(params: {
    accessToken: string;
  }): Promise<UserResponse> {
    try {
      const result = await fetch(`${baseUrl}auth/users/me/`, {
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
