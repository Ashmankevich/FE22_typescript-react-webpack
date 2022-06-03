import style from './InformationPage.module.css';
import { ContentTemplate } from '../../templates/content/ContentTemplate';
import { Header } from '../../features/header/Header';
import { Title } from '../../ui/title/Title';
import { AllTabsContent } from './components/AllTabsContent';

type InformationProps = {};

export const InformationPage: React.FC<InformationProps> = () => {
  return (
    <div className={style.container}>
      <Header></Header>
      <ContentTemplate
        title={<Title className={style.title}>Information</Title>}
      >
        <AllTabsContent></AllTabsContent>
      </ContentTemplate>
    </div>
  );
};
