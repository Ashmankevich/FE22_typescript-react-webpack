import { Post } from '../../../types/post';
import { CardList } from '../../../ui/card/card-list/CardList';
import { PostLikeDislike } from '../like-dislike/posts-like-dislike';
import { PostMarkDismark } from '../mark-post/posts-mark-dismark';

type MyPostsListProps = {
  onPreViewClick?: (id: string | number) => void;
  myPosts: Post[];
  onClick?: (id: string | number) => void;
};
export const MyPostsList: React.FC<MyPostsListProps> = ({
  onPreViewClick,
  myPosts,
  onClick,
}) => {
  return (
    <CardList
      data={myPosts ?? []}
      onPreViewClick={onPreViewClick}
      onClick={onClick}
      LikeDislike={PostLikeDislike}
      MarkPost={PostMarkDismark}
    ></CardList>
  );
};
