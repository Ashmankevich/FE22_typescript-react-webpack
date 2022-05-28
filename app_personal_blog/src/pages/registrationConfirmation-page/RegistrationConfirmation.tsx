import style from './RegistrationConfirmation.module.css';
import { Header } from '../../features/header/Header';
import { Title } from '../../ui/title/Title';
import { Button } from '../../ui/button/Button';

type RegistrationConfirmationProps = {};

export const RegistrationConfirmation: React.FC<
  RegistrationConfirmationProps
> = () => {
  return (
    <div className={style.container}>
      <Header></Header>
      <Title>Registration Confirmation</Title>
      <p className={style.row}>
        <span className={style.text}>Please activate your account with</span>
        <span className={style.text}>
          the activation link in the email {''}
          <a className="main-link" href="Link">
            jimiswank@gmail.com
          </a>
        </span>
        <span className={style.text}>Please, check your email</span>
      </p>
      <Button>Home</Button>
    </div>
  );
};
