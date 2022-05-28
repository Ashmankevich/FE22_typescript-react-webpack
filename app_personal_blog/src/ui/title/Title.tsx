import style from './Title.module.css';

type TitleProps = {
  children: React.ReactNode;
};

export const Title: React.FC<TitleProps> = ({ children }) => {
  return <h1 className={`${style.title} ${style.conf}`}>{children}</h1>;
};
