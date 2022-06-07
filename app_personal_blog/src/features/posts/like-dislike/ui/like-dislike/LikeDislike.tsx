import style from './LikeDislike.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp as pressedLike } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsDown as pressedDisLike } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons';

type LikeDislikeProps = {
  onLikeClick: () => void;
  onDisLikeClick: () => void;
  currentState: 'like' | 'dislike' | null;
  count: number;
};

export const LikeDislike: React.FC<LikeDislikeProps> = ({
  onLikeClick,
  onDisLikeClick,
  currentState,
  count,
}) => {
  const Like = <FontAwesomeIcon icon={faThumbsUp} />;
  const PressedLike = <FontAwesomeIcon icon={pressedLike} />;

  const DisLike = <FontAwesomeIcon icon={faThumbsDown} />;
  const PressedDisLike = <FontAwesomeIcon icon={pressedDisLike} />;

  return (
    <div className={style.wrapper}>
      <div>
        {currentState === 'like' ? PressedLike : Like}
        <div className={style.count}>{count > 0 ? count : null}</div>
      </div>
      <div>
        {currentState === 'dislike' ? PressedDisLike : DisLike}
        <div className={style.count}>{count > 0 ? Math.abs(count) : null}</div>
      </div>
    </div>
  );
};
