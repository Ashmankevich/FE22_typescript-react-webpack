import { useState } from 'react';
import { AuthorizationTemplate } from '../../../templates/authorization/AuthorizationTemplate';
import style from './LoginForm.module.css';
import { Button } from '../../../ui/button/Button';
import { Email } from '../../../ui/input/Email';
import { Password } from '../../../ui/input/Password';
import { Text } from '../../../ui/text/Text';
import { Title } from '../../../ui/title/Title';
import { Link } from 'react-router-dom';
import { AppPages } from '../../../types';

type LoginFormProps = {};

export const LoginForm: React.FC<LoginFormProps> = () => {
  const [emailValue, setEmailValue] = useState('jimiswank@gmail.com');
  const [passwordValue, setPasswordValue] = useState('123456');
  return (
    <div className={style.container}>
      <AuthorizationTemplate
        title={
          <Title>
            <span className={style.title}>
              Login <Link to={AppPages.REGISTRATION}>| Registration</Link>
            </span>
          </Title>
        }
      >
        <form className={style.form}>
          <Email
            value={emailValue}
            onChange={(event) => setEmailValue(event.target.value)}
          ></Email>
          <Password
            value={passwordValue}
            onChange={(event) => setPasswordValue(event.target.value)}
          ></Password>
        </form>
      </AuthorizationTemplate>
      <Link to={AppPages.ALL_POST}>
        <Button className={style.button} role="presentation">
          Login
        </Button>
      </Link>
      <Text>
        Forgot your password?{' '}
        <span>
          <a className="main-link" href="Link">
            Reset password
          </a>
        </span>
      </Text>
    </div>
  );
};
