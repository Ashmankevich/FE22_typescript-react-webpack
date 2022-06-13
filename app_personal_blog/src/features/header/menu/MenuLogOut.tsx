import { Link } from 'react-router-dom';
import { AppPages } from '../../../types';
import style from './MenuAllState.module.css';

type MenuLogOutProps = {
  children?: React.ReactNode;
};

export const MenuLogOut: React.FC<MenuLogOutProps> = () => {
  return (
    <nav>
      <ul className={style.row}>
        <li className={style.link}>
          <Link to={AppPages.LOGIN}>Login</Link>
        </li>
        <li className={style.link}>
          <Link to={AppPages.REGISTRATION}>Registration</Link>
        </li>
      </ul>
    </nav>
  );
};
