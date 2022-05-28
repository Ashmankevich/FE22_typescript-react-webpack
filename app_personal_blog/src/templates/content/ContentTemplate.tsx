import style from './ContentTemplate.module.css';
import { Title } from '../../ui/title/Title';

type ContentTemplateProps = {
  title: React.ReactNode;
  children: React.ReactNode;
};

export const ContentTemplate: React.FC<ContentTemplateProps> = ({
  title,
  children,
}) => {
  return (
    <div className={style.container}>
      <Title>{title}</Title>
      <div>{children}</div>
    </div>
  );
};
