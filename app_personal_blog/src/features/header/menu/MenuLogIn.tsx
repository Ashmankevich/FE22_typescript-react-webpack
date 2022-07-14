import { Link } from 'react-router-dom';
import { AppPages } from '../../../types';
import style from './MenuAllState.module.css';

type MenuLogInProps = {
  children?: React.ReactNode;
  className?: string;
};

export const MenuLogIn: React.FC<MenuLogInProps> = () => {
  return (
    <nav>
      <ul className={style.row}>
        <li className={style.link}>
          <Link to={AppPages.ALL_POST}>All posts</Link>
        </li>
        <li className={style.link}>
          <Link to={AppPages.MY_POSTS_PAGE}>My post</Link>
        </li>
        <li className={style.link}>
          <Link to={AppPages.ADD_POST_PAGE}>Add post</Link>
        </li>
        <li className={style.link}>
          <a href="All post">Log out</a>
        </li>
      </ul>
    </nav>
  );
};
