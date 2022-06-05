import style from './AllPostPage.module.css';
import data from './data.json';
import { useEffect, useState } from 'react';
import { Header } from '../../features/header/Header';
import { ContentTemplate } from '../../templates/content/ContentTemplate';
import { CardList } from '../../ui/card/card-list/CardList';
import { Button } from '../../ui/button/Button';
import { Title } from '../../ui/title/Title';
import { setSelectedPost } from '../../features/posts/SelectedPostSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CardPost } from '../../ui/card/card-post/CardPost';

type AllPostPageProps = {};

export const AllPostPage: React.FC<AllPostPageProps> = () => {
  const [posts, setPosts] = useState<typeof data | null>(null);
  const selectedPostId = useAppSelector((state) => state.selectedPost.id);
  const selectedPost =
    selectedPostId != null
      ? posts?.find((item) => item.id === selectedPostId)
      : null;
  const dispatch = useAppDispatch();
  console.log(selectedPostId);
  useEffect(() => {
    setTimeout(() => {
      setPosts(data);
    }, 1000);
  }, []);

  return (
    <div className={style.container}>
      {selectedPostId != null ? (
        <div className={style.overlayContainer}>
          <div className={style.overlay}>
            {selectedPost ? <CardPost {...selectedPost}></CardPost> : null}
          </div>
        </div>
      ) : null}
      <Header></Header>
      <ContentTemplate
        title={
          <div className={style.row}>
            <Title>My posts</Title>
            <Button className={style.button}>+Add</Button>
          </div>
        }
      >
        <CardList
          data={posts ?? []}
          onPreViewClick={(id) => dispatch(setSelectedPost(id))}
        ></CardList>
      </ContentTemplate>
    </div>
  );
};
