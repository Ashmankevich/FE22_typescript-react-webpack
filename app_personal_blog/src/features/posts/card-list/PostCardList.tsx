import { useState, useEffect } from 'react';
import { CardList } from '../../../ui/card/card-list/CardList';
import { PostLikeDislike } from '../like-dislike/posts-like-dislike';
import { PostMarkDismark } from '../mark-post/posts-mark-dismark';
import data from './data.json';

type PostCardListProps = {
  onPreViewClick?: (id: number) => void;
};
export const PostCardList: React.FC<PostCardListProps> = ({
  onPreViewClick,
}) => {
  const [posts, setPosts] = useState<typeof data | null>(null);
  useEffect(() => {
    setTimeout(() => {
      setPosts(data);
    }, 1000);
  }, []);
  return (
    <CardList
      data={posts ?? []}
      onPreViewClick={onPreViewClick}
      LikeDislike={PostLikeDislike}
      MarkPost={PostMarkDismark}
    ></CardList>
  );
};
