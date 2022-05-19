import styles from './Button.module.css';

type ButtonProps = {
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button type="button" className={styles.button}>
      {children}
    </button>
  );
};
