import style from './LoginConfirmation.module.css';
import { Header } from '../../features/header/Header';
import { Title } from '../../ui/title/Title';
import { AuthorizationTemplate } from '../../templates/authorization/AuthorizationTemplate';
import { Button } from '../../ui/button/Button';

type LoginConfirmationProps = {};

export const LoginConfirmation: React.FC<LoginConfirmationProps> = () => {
  return (
    <div className={style.container}>
      <Header></Header>
      <AuthorizationTemplate
        title={<Title className={style.title}>Success</Title>}
      >
        <p className={style.row}>
          <span className={style.text}>Email confirmed.</span>
          <span className={style.text}>Your registration is now complited</span>
        </p>
      </AuthorizationTemplate>
      <Button className={style.button}>Login</Button>
    </div>
  );
};
