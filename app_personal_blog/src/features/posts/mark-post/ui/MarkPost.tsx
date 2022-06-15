import style from './LikeDislike.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as pressedMark } from '@fortawesome/free-solid-svg-icons';

type MarkDisMarkProps = {
  onMarkClick: () => void;
  currentState: 'markOn' | 'markOf' | null;
};

export const MarkPost: React.FC<MarkDisMarkProps> = ({
  onMarkClick,
  currentState,
}) => {
  const Marked = (
    <FontAwesomeIcon
      icon={pressedMark}
      onClick={(event) => {
        event.preventDefault();
        onMarkClick();
      }}
      role="button"
    />
  );
  const DisMarked = (
    <FontAwesomeIcon
      icon={faBookmark}
      onClick={(event) => {
        event.preventDefault();
        onMarkClick();
      }}
      role="button"
    />
  );

  return (
    <div className={style.wrapper}>
      {currentState === 'markOn' ? Marked : DisMarked}
    </div>
  );
};
