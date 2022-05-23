import styles from './CardPost.module.css';

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
    <div className={styles.item} id={`${id}`}>
      <img className={styles.item_img} src={image} alt="" />
      <h2 className={styles.item_title}>{title}</h2>
      <p className={styles.item_text}>{text}</p>
      <p className={styles.item_date}>{date}</p>
    </div>
  );
};
