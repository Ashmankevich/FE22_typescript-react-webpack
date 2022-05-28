import style from './CardPost.module.css';

type CardPostProps = {
  id: number;
  image: string | undefined;
  text: string;
  date: string;
  title: string;
};
export const CardPost: React.FC<CardPostProps> = ({
  id,
  image,
  text,
  date,
  title,
}) => {
  return (
    <div className={style.item} id={`${id}`}>
      <div className={style.wrapper}>
        <img className={style.img} src={image} alt="Oops! Don't worry" />
      </div>
      <h2 className={style.title}>{title}</h2>
      <p className={style.text}>{text}</p>
      <p className={style.date}>{date}</p>
    </div>
  );
};
