import { Post } from '../../types/post';

export type SortResponse = {
  count: number;
  next: string;
  previous: string | null;
  results: Post[];
};

export type SortPayload = {
  text: string;
};
