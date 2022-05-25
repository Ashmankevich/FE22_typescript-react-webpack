import styles from './Menu.module.css';

type MenuProps = {
  children?: React.ReactNode;
};

export const Menu: React.FC<MenuProps> = () => {
  return (
    <nav className={styles.styles}>
      <ul>
        <li>
          <a href="All post">All posts</a>
        </li>
        <li>
          <a href="My post">My post</a>
        </li>
        <li>
          <a href="Add post">Add posts</a>
        </li>
        <li>
          <a href="All post">Log out</a>
        </li>
      </ul>
    </nav>
  );
};
