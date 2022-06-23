import style from './AllPostPage.module.css';
import { useEffect, useState } from 'react';
import { Header } from '../../../features/header/Header';
import { ContentTemplate } from '../../../templates/content/ContentTemplate';
import { Button } from '../../../ui/button/Button';
import { Title } from '../../../ui/title/Title';
import { setSelectedPost } from '../../../features/posts/SelectedPostSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { CardPost } from '../../../ui/card/card-post/CardPost';
import { PostCardList } from '../../../features/posts/card-list/PostCardList';
import { AllPostFetch } from '../allPostPageSlice';

type AllPostPageProps = {};

export const AllPostPage: React.FC<AllPostPageProps> = () => {
  const [popUp, setPopUp] = useState(false);
  const allPosts = useAppSelector((state) => state.allPost.posts);
  const selectedPostId = useAppSelector((state) => state.selectedPost.id);
  const selectedPost =
    selectedPostId != null
      ? allPosts?.find(
          (item: { id: string | number }) => item.id === selectedPostId
        )
      : null;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(AllPostFetch());
  }, [dispatch]);

  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.container}>
          <Header></Header>
          <ContentTemplate
            title={
              <div className={style.row}>
                <Title>My posts</Title>
                <Button className={style.button}>+Add</Button>
              </div>
            }
          >
            <PostCardList
              onPreViewClick={(id) => {
                dispatch(setSelectedPost(id));
                setPopUp(true);
              }}
            ></PostCardList>
          </ContentTemplate>
        </div>
      </div>
      {selectedPostId != null ? (
        <div
          className={
            popUp
              ? `${style.overlayContainer}`
              : `${style.overlayContainerNone}`
          }
        >
          <div className={style.overlay}>
            {selectedPost ? <CardPost {...selectedPost}></CardPost> : null}
            <span
              className={style.btn_close}
              onClick={() => {
                setPopUp(false);
              }}
            ></span>
          </div>
        </div>
      ) : null}
    </div>
  );
};
