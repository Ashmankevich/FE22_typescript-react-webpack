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
      {selectedPostId != null ? (
        <div className={style.overlayContainer}>
          <div className={style.overlay}>
            {selectedPost ? <CardPost {...selectedPost}></CardPost> : null}
            <span className={style.overlay_close}>X</span>
          </div>
        </div>
      ) : null}
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
              onPreViewClick={(id) => dispatch(setSelectedPost(id))}
            ></PostCardList>
          </ContentTemplate>
        </div>
      </div>
    </div>
  );
};
