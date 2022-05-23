import styles from './Menu.module.css';

type MenuProps = {
  children?: React.ReactNode;
};

export const Menu: React.FC<MenuProps> = () => {
  return (
    <nav className={styles.menu_nav}>
      <ul className={styles.menu_list}>
        <li className={styles.menu_link}>
          <a href="All post">All posts</a>
        </li>
        <li className={styles.menu_link}>
          <a href="My post">My post</a>
        </li>
        <li className={styles.menu_link}>
          <a href="Add post">Add posts</a>
        </li>
        <li className={styles.menu_link}>
          <a href="All post">Log out</a>
        </li>
      </ul>
    </nav>
  );
};
