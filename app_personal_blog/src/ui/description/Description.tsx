import styles from './Description.module.css';

type DescriptionProps = {
  children: React.ReactNode;
};

export const Description: React.FC<DescriptionProps> = ({ children }) => {
  return <p className={styles.text}>{children}</p>;
};
