import style from './UserButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

type UserButtonProps = {
  children?: React.ReactNode;
  className?: string;
};

export const UserButton: React.FC<UserButtonProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={style.container}>
      <FontAwesomeIcon icon={faUser} className={style.userButton} />
      <button className={`${style.button} ${className}`}>{children}</button>
    </div>
  );
};
