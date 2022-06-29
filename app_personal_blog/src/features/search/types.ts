import { Post } from '../../types/post';

export type SearchResponse = {
  count: number;
  next: string;
  previous: null;
  result: Post[];
};

export type SearchPayload = {
  text: string;
};
