import style from './AuthorizationTemplate.module.css';

type AuthorizationTemplateProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  Button: React.ReactNode;
};

export const AuthorizationTemplate: React.FC<AuthorizationTemplateProps> = ({
  title,
  children,
  Button,
}) => {
  return (
    <div className={style.container}>
      {title}
      {children}
      {Button}
    </div>
  );
};
