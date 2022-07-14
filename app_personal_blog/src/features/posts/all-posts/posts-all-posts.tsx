import { Post } from '../../../types/post';
import { CardList } from '../../../ui/card/card-list/CardList';
import { PostLikeDislike } from '../like-dislike/posts-like-dislike';
import { PostMarkDismark } from '../mark-post/posts-mark-dismark';

type AllPostsListProps = {
  onPreViewClick?: (id: string | number) => void;
  posts: Post[];
  onClick?: (id: string | number) => void;
};
export const AllPostsList: React.FC<AllPostsListProps> = ({
  onPreViewClick,
  posts,
  onClick,
}) => {
  return (
    <CardList
      data={posts ?? []}
      onPreViewClick={onPreViewClick}
      onClick={onClick}
      LikeDislike={PostLikeDislike}
      MarkPost={PostMarkDismark}
    ></CardList>
  );
};
