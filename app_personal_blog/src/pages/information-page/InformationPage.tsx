import style from './InformationPage.module.css';
import { Header } from '../../features/header/Header';
import { ContentTemplate } from '../../templates/content/ContentTemplate';
import { Title } from '../../ui/title/Title';

type InformationProps = {};

export const InformationPage: React.FC<InformationProps> = () => {
  return (
    <div className={style.container}>
      <Header></Header>
      <ContentTemplate
        title={<Title className={style.title}>Information</Title>}
        children={undefined}
      ></ContentTemplate>
    </div>
  );
};
