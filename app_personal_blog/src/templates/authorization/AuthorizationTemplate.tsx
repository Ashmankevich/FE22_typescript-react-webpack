import style from './AuthorizationTemplate.module.css';

type AuthorizationTemplateProps = {
  title: React.ReactNode;
  children: React.ReactNode;
};

export const AuthorizationTemplate: React.FC<AuthorizationTemplateProps> = ({
  title,
  children,
}) => {
  return (
    <div className={style.container}>
      {title}
      {children}
    </div>
  );
};
