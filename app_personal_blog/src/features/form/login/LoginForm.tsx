import { useState } from 'react';
import { AuthorizationTemplate } from '../../../templates/authorization/AuthorizationTemplate';
import style from './LoginForm.module.css';
import { Button } from '../../../ui/button/Button';
import { Email } from '../../../ui/input/Email';
import { Password } from '../../../ui/input/Password';
import { Text } from '../../../ui/text/Text';
import { Title } from '../../../ui/title/Title';

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
              <a href="link">Login</a> | Registration
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
      <Button className={style.button}>Login</Button>
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
