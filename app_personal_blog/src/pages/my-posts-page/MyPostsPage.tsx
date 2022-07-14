import style from './MyPostPage.module.css';
import { useEffect, useState } from 'react';
import { Header } from '../../features/header/Header';
import { ContentTemplate } from '../../templates/content/ContentTemplate';
import { Button } from '../../ui/button/Button';
import { Title } from '../../ui/title/Title';
import { setSelectedPost } from '../../features/posts/selected-post/selectedPostSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CardPost } from '../../ui/card/card-post/CardPost';
import { Link } from 'react-router-dom';
import { AppPages } from '../../types';
import { actions } from '../../features/posts/get-my-posts/myPostsPageSlice';
import { MyPostsList } from '../../features/posts/get-my-posts/posts-my-posts';
import { Post } from '../../types/post';

type MyPostsPageProps = {};

export const MyPostsPage: React.FC<MyPostsPageProps> = () => {
  const myPosts = useAppSelector((item) => item.myPosts.myPosts);
  const getListMyPosts = (_posts: Post[]): Post[] => {
    return myPosts;
  };
  const [popUp, setPopUp] = useState(false);
  const dispatch = useAppDispatch();
  const selectedPostId = useAppSelector((state) => state.selectedPost.id);
  const selectedPost =
    selectedPostId != null
      ? myPosts?.find((item) => item.id === selectedPostId)
      : null;
  useEffect(() => {
    dispatch(actions.getMyPostsFetch);
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
                <Link to={AppPages.ADD_POST_PAGE}>
                  <Button className={style.button}>add +</Button>
                </Link>
              </div>
            }
          >
            <MyPostsList
              onPreViewClick={(id) => {
                dispatch(setSelectedPost(id));
                setPopUp(true);
              }}
              myPosts={getListMyPosts(myPosts!)}
            ></MyPostsList>
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
