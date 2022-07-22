import style from './BookItem.module.css';
import { NewBookApi } from './types';

type BookItemProps = {
  book: NewBookApi;
};

export const BookItem: React.FC<BookItemProps> = ({ book }) => {
  return (
    <div className={style.wrapper} key={book.isbn13}>
      <img className={style.pic} src={book.image} alt={book.title} />
      <h2 className={style.title}>{book.title}</h2>
      <h3 className={style.subtitle}>{book.subtitle}</h3>
      <div className={style.price}>
        {book.price === '$0.00' ? 'Not Available' : book.price}
      </div>
    </div>
  );
};
