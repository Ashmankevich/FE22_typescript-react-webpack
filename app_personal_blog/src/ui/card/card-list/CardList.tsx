import style from './CardList.module.css';
import { CardPost } from '../card-post/CardPost';

export const CardList: React.FC = () => {
  const items = [
    {
      id: 1,
      image: 'lorem',
      text: 'lorem',
      date: 'lorem',
      title: 'lorem',
    },
    {
      id: 2,
      image: 'lorem',
      text: 'lorem',
      date: 'lorem',
      title: 'lorem',
    },
    {
      id: 3,
      image: 'lorem',
      text: 'lorem',
      date: 'lorem',
      title: 'lorem',
    },
  ];
  return (
    <div className={style.cardList}>
      {items.map((item) => (
        <CardPost
          id={item.id}
          image={item.image}
          text={item.text}
          date={item.date}
          title={item.title}
        ></CardPost>
      ))}
    </div>
  );
};
