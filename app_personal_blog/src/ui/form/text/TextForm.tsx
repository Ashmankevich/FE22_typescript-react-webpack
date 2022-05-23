import styles from './Text-form.module.css';

type TextProps = {
  children: React.ReactNode;
};

export const Text: React.FC<TextProps> = ({ children }) => {
  return <p className={styles.text}>{children}</p>;
};
