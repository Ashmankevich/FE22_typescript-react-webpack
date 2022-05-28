import style from './LoginPage.module.css';
import { Header } from '../../features/header/Header';
import { LoginForm } from '../../features/form/login/LoginForm';

type LoginPageProps = {};

export const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <div className={style.container}>
      <Header></Header>
      <LoginForm></LoginForm>
    </div>
  );
};
