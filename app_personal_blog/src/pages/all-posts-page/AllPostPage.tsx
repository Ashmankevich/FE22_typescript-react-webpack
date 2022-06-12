import style from './AllPostPage.module.css';
import data from './data.json';
import { useEffect, useState } from 'react';
import { Header } from '../../features/header/Header';
import { ContentTemplate } from '../../templates/content/ContentTemplate';
import { Button } from '../../ui/button/Button';
import { Title } from '../../ui/title/Title';
import { setSelectedPost } from '../../features/posts/SelectedPostSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CardPost } from '../../ui/card/card-post/CardPost';
import { PostCardList } from '../../features/posts/card-list/PostCardList';

type AllPostPageProps = {};

export const AllPostPage: React.FC<AllPostPageProps> = () => {
  const [posts, setPosts] = useState<typeof data | null>(null);
  const [popUp, setPopUp] = useState(false);
  const selectedPostId = useAppSelector((state) => state.selectedPost.id);
  const selectedPost =
    selectedPostId != null
      ? posts?.find((item) => item.id === selectedPostId)
      : null;
  const dispatch = useAppDispatch();
  useEffect(() => {
    setTimeout(() => {
      setPosts(data);
    }, 1000);
  }, []);

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
