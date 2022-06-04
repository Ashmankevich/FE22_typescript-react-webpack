import { Link } from 'react-router-dom';
import { AppPages } from '../../../types';
import style from './Menu.module.css';

type MenuProps = {
  children?: React.ReactNode;
};

export const Menu: React.FC<MenuProps> = () => {
  return (
    <nav className={style.styles}>
      <ul>
        <li className={style.link}>
          <a href="All post">All posts</a>
        </li>
        <li className={style.link}>
          <Link to={AppPages.ALL_POST}>My post</Link>
        </li>
        <li className={style.link}>
          <a href="Add post">Add posts</a>
        </li>
        <li className={style.link}>
          <a href="All post">Log out</a>
        </li>
      </ul>
    </nav>
  );
};
