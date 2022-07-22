import style from './Home.module.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getBooks } from '../../selectors';
import { fetchBook } from './bookSlice';
import { BookList } from './BookList';

type HomeProps = {};

export const Home: React.FC<HomeProps> = () => {
  const dispatch = useAppDispatch();
  const { books } = useAppSelector(getBooks);
  useEffect(() => {
    dispatch(fetchBook());
  }, [dispatch]);
  return (
    <div className={style.wrapper}>
      <BookList books={books}></BookList>
    </div>
  );
};
