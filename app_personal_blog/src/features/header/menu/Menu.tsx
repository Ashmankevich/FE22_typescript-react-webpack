import style from './Menu.module.css';

type MenuProps = {
  children?: React.ReactNode;
};

export const Menu: React.FC<MenuProps> = () => {
  return (
    <nav className={style.styles}>
      <ul>
        <li>
          <a className={style.link} href="All post">
            All posts
          </a>
        </li>
        <li>
          <a className={style.link} href="My post">
            My post
          </a>
        </li>
        <li>
          <a className={style.link} href="Add post">
            Add posts
          </a>
        </li>
        <li>
          <a className={style.link} href="All post">
            Log out
          </a>
        </li>
      </ul>
    </nav>
  );
};
