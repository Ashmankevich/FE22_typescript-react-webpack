import styles from './Header.module.css';

type HeaderProps = {
  children: React.ReactNode;
};

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return <h1 className={styles.header}>{children}</h1>;
};
