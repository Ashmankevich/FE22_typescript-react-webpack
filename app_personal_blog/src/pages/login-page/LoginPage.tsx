import { Header } from '../../features/header/Header';
import { LoginForm } from '../../features/form/login/LoginForm';

type LoginPageProps = {};

export const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <div>
      <Header></Header>
      <LoginForm></LoginForm>
    </div>
  );
};
