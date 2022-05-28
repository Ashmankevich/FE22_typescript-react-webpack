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
      <img className={style.item_img} src={image} alt="" />
      <h2 className={style.item_title}>{title}</h2>
      <p className={style.item_text}>{text}</p>
      <p className={style.item_date}>{date}</p>
    </div>
  );
};
