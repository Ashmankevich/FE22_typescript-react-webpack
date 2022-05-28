import { ContentTemplate } from '../../templates/content/ContentTemplate';
import { CardList } from '../../ui/card/card-list/CardList';

type ContentMainPageProps = {};

export const ContentMainPage: React.FC<ContentMainPageProps> = () => {
  return (
    <div>
      <ContentTemplate title="Blog">{null}</ContentTemplate>
      <CardList></CardList>
    </div>
  );
};
