import style from './AllPostPage.module.css';
import { useEffect, useState } from 'react';
import { Header } from '../../features/header/Header';
import { ContentTemplate } from '../../templates/content/ContentTemplate';
import { Button } from '../../ui/button/Button';
import { Title } from '../../ui/title/Title';
import { setSelectedPost } from '../../features/posts/selected-post/selectedPostSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CardPost } from '../../ui/card/card-post/CardPost';
import { getAllPostsFetch } from '../../features/posts/all-posts/allPostsPageSlice';
import { refresh } from '../../features/auth/authSlice';
import { getUser } from '../../features/user/userSlice';
import { AllPostsList } from '../../features/posts/all-posts/posts-all-posts';
import { Post } from '../../types/post';
import { Link } from 'react-router-dom';
import { AppPages } from '../../types';
import { SortBar } from '../../features/sort';
import { actions } from '../../features/sort/sortSlice';

type AllPostPageProps = {};

export const AllPostPage: React.FC<AllPostPageProps> = () => {
  const posts = useAppSelector((item) => item.allPosts.posts);
  const getListPosts = (posts: Post[]): Post[] => {
    return posts;
  };
  const sortedPosts = useAppSelector((state) => state.sort.response);
  const allPosts = sortedPosts ? sortedPosts : posts;
  const [popUp, setPopUp] = useState(false);
  const dispatch = useAppDispatch();
  const selectedPostId = useAppSelector((state) => state.selectedPost.id);
  const selectedPost =
    selectedPostId != null
      ? allPosts?.find((item) => item.id === selectedPostId)
      : null;
  useEffect(() => {
    dispatch(getUser());
    dispatch(getAllPostsFetch());
    dispatch(refresh());
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
            <AllPostsList
              onPreViewClick={(id) => {
                dispatch(setSelectedPost(id));
                setPopUp(true);
              }}
              posts={getListPosts(posts!)}
            ></AllPostsList>
            <SortBar
              onChange={(e) => {
                console.log(e.currentTarget.value);
                dispatch(actions.getSortFetch({ text: e.currentTarget.value }));
              }}
            ></SortBar>
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
