import styles from './Button.module.css';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({ children, className = '' }) => {
  return (
    <button type="button" className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
};
