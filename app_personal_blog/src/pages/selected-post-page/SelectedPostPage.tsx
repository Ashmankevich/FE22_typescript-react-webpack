import style from './SelectedPostPage.module.css';
import { Header } from '../../features/header/Header';
import { Title } from '../../ui/title/Title';
import { ContentTemplate } from '../../templates/content/ContentTemplate';
import { CardPost } from '../../ui/card/card-post/CardPost';

type SelectedPostProps = {};

export const SelectedPostPage: React.FC<SelectedPostProps> = () => {
  return (
    <div className={style.container}>
      <Header></Header>
      <ContentTemplate
        title={<Title className={style.post}>Selected Post</Title>}
        children={undefined}
      ></ContentTemplate>
      <div className={style.row}>
        <CardPost
          id={1}
          image="https://media.gq.com/photos/5abd48676fb549612f7fc48d/master/w_1600%2Cc_limit/flex-101-pink-2.jpg"
          title="Who is this person?"
          text="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
          date="22.09.2022"
        ></CardPost>
      </div>
    </div>
  );
};
