import style from './AuthorizationTemplate.module.css';

type AuthorizationTemplateProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  button?: React.ReactNode;
  text?: React.ReactNode;
};

export const AuthorizationTemplate: React.FC<AuthorizationTemplateProps> = ({
  title,
  children,
  button,
  text,
}) => {
  return (
    <div className={style.container}>
      {title}
      {children}
      {button}
      {text}
    </div>
  );
};
