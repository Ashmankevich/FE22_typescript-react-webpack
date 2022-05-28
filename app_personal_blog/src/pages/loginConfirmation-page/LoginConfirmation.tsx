import style from './LoginConfirmation.module.css';
import { Header } from '../../features/header/Header';
import { Title } from '../../ui/title/Title';
import { Button } from '../../ui/button/Button';

type LoginConfirmationProps = {};

export const LoginConfirmation: React.FC<LoginConfirmationProps> = () => {
  return (
    <div className={style.container}>
      <Header></Header>
      <Title>Success</Title>
      <p className={style.row}>
        <span className={style.text}>Email confirmed.</span>
        <span className={style.text}>Your registration is now complited</span>
      </p>
      <Button>Login</Button>
    </div>
  );
};
