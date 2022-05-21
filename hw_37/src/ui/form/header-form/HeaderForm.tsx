import styles from './Header-form.module.css';

type HeaderFormProps = {
  children: React.ReactNode;
};

export const HeaderForm: React.FC<HeaderFormProps> = ({ children }) => {
  return <h1 className={styles.header_form}>{children}</h1>;
};
