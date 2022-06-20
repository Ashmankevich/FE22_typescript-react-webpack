import { useEffect } from 'react';
import { CardList } from '../../ui/card/card-list/CardList';
import { PostLikeDislike } from '../../features/posts/like-dislike/posts-like-dislike';
import { PostMarkDismark } from '../../features/posts/mark-post/posts-mark-dismark';
import { AllPostFetch } from './AllPostPageSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { allPostsResponse } from './types';

type AllPostPageIndexProps = {
  onPreViewClick?: (id: string | number) => void;
  allPosts: allPostsResponse[];
};
export const AllPostPageIndex: React.FC<AllPostPageIndexProps> = ({
  onPreViewClick,
  allPosts,
}) => {
  const AllPosts = useAppSelector((state) => state.allPosts.allPosts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(AllPostFetch());
  }, [dispatch]);
  return (
    <CardList
      data={allPosts ?? []}
      onPreViewClick={onPreViewClick}
      LikeDislike={PostLikeDislike}
      MarkPost={PostMarkDismark}
    ></CardList>
  );
};
