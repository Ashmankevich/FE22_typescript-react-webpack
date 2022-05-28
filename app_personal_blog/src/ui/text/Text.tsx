import style from './Text.module.css';

type TextProps = {
  children: React.ReactNode;
};

export const Text: React.FC<TextProps> = ({ children }) => {
  return <p className={style.text}>{children}</p>;
};
