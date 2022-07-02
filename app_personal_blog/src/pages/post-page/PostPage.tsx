import style from './PostPage.module.css';
import { useEffect } from 'react';
import { Header } from '../../features/header/Header';
import { ContentTemplate } from '../../templates/content/ContentTemplate';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CardPost } from '../../ui/card/card-post/CardPost';
import { useParams } from 'react-router-dom';
import { getPost } from '../../features/posts/post/postSlice';
import { PostLikeDislike } from '../../features/posts/like-dislike/posts-like-dislike';
import { PostMarkDismark } from '../../features/posts/mark-post/posts-mark-dismark';
import { Title } from '../../ui/title/Title';

type PostPageProps = {};

export const PostPage: React.FC<PostPageProps> = () => {
  const post = useAppSelector((state) => state.post.post);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(getPost({ id }));
    }
  }, [dispatch, id]);
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <Header></Header>
        <ContentTemplate
          title={<Title className={style.post}>Selected Post</Title>}
        >
          <div className={style.row}>
            <CardPost
              id={post.id}
              image={post.image}
              text={post.text}
              title={post.title}
              LikeDislike={PostLikeDislike}
              MarkPost={PostMarkDismark}
            ></CardPost>
          </div>
        </ContentTemplate>
      </div>
    </div>
  );
};
