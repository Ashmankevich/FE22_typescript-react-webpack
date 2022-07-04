import { Header } from '../../features/header/Header';
import { AddPostForm } from '../../features/posts/add-post';
import { ContentTemplate } from '../../templates/content/ContentTemplate';
import { Title } from '../../ui/title/Title';
import style from './AddPostPage.module.css';

type AddPostPageProps = {};

export const AddPostPage: React.FC<AddPostPageProps> = () => {
  return (
    <div className={style.wrapper}>
      <Header></Header>
      <ContentTemplate
        title={
          <div className={style.row}>
            <Title>Add posts</Title>
          </div>
        }
      >
        <AddPostForm></AddPostForm>
      </ContentTemplate>
    </div>
  );
};
