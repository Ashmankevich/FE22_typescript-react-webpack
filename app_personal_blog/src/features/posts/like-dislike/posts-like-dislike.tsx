//post-like-dislaike - это общий компонент, который отвечает за отображение данных из стора
import React from 'react';
import { setState } from './likeDislikeSlice';
import { LikeDislike } from './ui/like-dislike/LikeDislike';
import { useAppDispatch, useAppSelector } from '../../../hooks'; //useAppSelector используем чтобы найти наш пост по id

type PostsLikeDislikeProps = {
  id: number | string;
};

export const PostLikeDislike: React.FC<PostsLikeDislikeProps> = ({ id }) => {
  const { count, state } = useAppSelector(
    (state) => state.likeDislike[id] ?? { count: 0, state: null }
  );
  const dispatch = useAppDispatch(); //диспатч позволяет нам вызвать экшн, чтобы редакс словил экшн и что-то с ним сделал
  const onLikeClick = () => {
    if (state !== 'like') {
      dispatch(setState({ id, state: 'like' }));
    }
  };
  const onDisLikeClick = () => {
    if (state !== 'dislike') {
      dispatch(setState({ id, state: 'dislike' }));
    }
  };
  return (
    <LikeDislike //в слайсе мы описывам, что делаем по запросу на данные, т.е. мы меняем каким-то образом стор. В слайсе пишем то, что нужно поменять по экшену
      onLikeClick={() => onLikeClick()}
      onDisLikeClick={() => onDisLikeClick()}
      currentState={state}
      count={count}
    ></LikeDislike>
  );
};
