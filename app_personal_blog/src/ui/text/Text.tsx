import style from './Text.module.css';

type TextProps = {
  children: React.ReactNode;
  className?: string;
};

export const Text: React.FC<TextProps> = ({ children, className = '' }) => {
  return <p className={`${style.text} ${className}`}>{children}</p>;
};
