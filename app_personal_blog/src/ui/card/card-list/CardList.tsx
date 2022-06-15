import style from './CardList.module.css';
import { CardPost } from '../card-post/CardPost';

type CardListProps = {
  data: Array<{
    id: number;
    image?: string | undefined;
    title: string;
    text: string;
    date: string;
  }>;
  onPreViewClick?: (id: number) => void;
  LikeDislike?: React.ComponentType<{ id: string | number }>;
  MarkPost?: React.ComponentType<{ id: string | number }>;
};

export const CardList: React.FC<CardListProps> = ({
  data,
  onPreViewClick,
  LikeDislike,
  MarkPost,
}) => {
  return (
    <div className={style.cardList}>
      {data.map((item) => (
        <CardPost
          id={item.id}
          key={item.id}
          image={item.image}
          text={item.text}
          date={item.date}
          title={item.title}
          onPreViewClick={onPreViewClick}
          LikeDislike={LikeDislike}
          MarkPost={MarkPost}
        ></CardPost>
      ))}
    </div>
  );
};
