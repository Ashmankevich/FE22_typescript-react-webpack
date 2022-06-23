import style from './MarkPost.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as pressedMark } from '@fortawesome/free-solid-svg-icons';

type MarkPostProps = {
  onMarkClick: () => void;
  currentState: 'markOn' | 'markOf' | null;
};

export const MarkPost: React.FC<MarkPostProps> = ({
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
