import { baseUrl, commonPostHeaders } from '../../api/config';
import {
  ActivatePayload,
  LoginPayload,
  RegisterPayload,
  RegisterResponce,
  LoginResponse,
  RefreshResponse,
} from './types';

export namespace AuthApi {
  export async function register(
    payload: RegisterPayload
  ): Promise<RegisterResponce> {
    try {
      const result = await fetch(`${baseUrl}auth/users/`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: commonPostHeaders,
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

  let activatePromise = Promise.resolve({ isActivated: false });

  export async function isActivated() {
    const result = await activatePromise;
    return result.isActivated;
  }

  export async function activate(payload: ActivatePayload) {
    let resolveCB: (arg: { isActivated: boolean }) => void;
    let rejectCB: (arg: any) => void;
    const promise = new Promise<{ isActivated: boolean }>((resolve, reject) => {
      resolveCB = resolve;
      rejectCB = reject;
    });
    activatePromise = activatePromise.then(() => promise);
    try {
      const result = await fetch(`${baseUrl}auth/users/activation/`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: commonPostHeaders,
      });
      if (!result.ok) {
        const errorText = await result.text();
        throw new Error(errorText);
      }
      const data = await result.text();
      resolveCB!({ isActivated: true });
      return data;
    } catch (e) {
      rejectCB!(e);
      throw e;
    }
  }

  export async function login(payload: LoginPayload): Promise<LoginResponse> {
    try {
      const result = await fetch(`${baseUrl}auth/jwt/create/`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: commonPostHeaders,
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

  export async function refresh(
    refreshToken: string
  ): Promise<RefreshResponse> {
    try {
      const result = await fetch(`${baseUrl}auth/jwt/refresh/`, {
        method: 'POST',
        body: JSON.stringify({ refresh: refreshToken }),
        headers: commonPostHeaders,
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
