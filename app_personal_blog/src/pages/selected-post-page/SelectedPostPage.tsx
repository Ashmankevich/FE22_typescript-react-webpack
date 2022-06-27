import style from './SelectedPostPage.module.css';
import { Header } from '../../features/header/Header';
import { Title } from '../../ui/title/Title';
import { ContentTemplate } from '../../templates/content/ContentTemplate';
import { CardPost } from '../../ui/card/card-post/CardPost';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import { getPostFetch } from '../../features/posts/selected-post/selectedPostSlice';

type SelectedPostProps = {};

export const SelectedPostPage: React.FC<SelectedPostProps> = () => {
  const dataPosts = useAppSelector((state) => state.allPost.posts);
  const selectedPostId = useAppSelector((state) => state.selectedPost.id);
  const selectedPost =
    selectedPostId != null
      ? dataPosts.find((item) => item.id === selectedPostId)
      : null;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPostFetch());
  }, [dispatch]);
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <Header></Header>
        <ContentTemplate
          title={<Title className={style.post}>Selected Post</Title>}
          children={undefined}
        ></ContentTemplate>
        <div className={style.row}>
          {selectedPost ? <CardPost {...selectedPost}></CardPost> : null}
        </div>
      </div>
    </div>
  );
};
