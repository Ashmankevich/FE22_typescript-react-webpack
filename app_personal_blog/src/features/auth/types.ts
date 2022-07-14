export type RegisterPayload = {
  email: string;
  password: string;
  username: string;
};

export type RegisterResponce = {
  email: string;
  id: number;
  username: string;
};

export type ActivatePayload = {
  uid: string;
  token: string;
};

export type LoginPayload = Omit<RegisterPayload, 'username'>;

export type LoginResponse = {
  access: string;
  refresh: string;
};

export type RefreshResponse = {
  access: string;
};
