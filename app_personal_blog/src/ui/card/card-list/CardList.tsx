import style from './CardList.module.css';
import { CardPost } from '../card-post/CardPost';
import { Link } from 'react-router-dom';
import { AppPages } from '../../../types';

type CardListProps = {
  data: Array<{
    id: string | number;
    image?: string | undefined;
    title: string;
    text: string;
    date: string;
  }>;
  onPreViewClick?: (id: number | string) => void;
  onClick?: (id: number | string) => void;
  LikeDislike?: React.ComponentType<{ id: string | number }>;
  MarkPost?: React.ComponentType<{ id: string | number }>;
};

export const CardList: React.FC<CardListProps> = ({
  data,
  onPreViewClick,
  onClick,
  LikeDislike,
  MarkPost,
}) => {
  return (
    <div className={style.cardList}>
      {data.map((item) => (
        <Link to={`${AppPages.POST_PAGE}/${item.id}`} key={item.id}>
          <CardPost
            id={item.id}
            key={item.id}
            image={item.image}
            text={item.text}
            date={item.date}
            title={item.title}
            onPreViewClick={onPreViewClick}
            onClick={onClick}
            LikeDislike={LikeDislike}
            MarkPost={MarkPost}
          ></CardPost>
        </Link>
      ))}
    </div>
  );
};
