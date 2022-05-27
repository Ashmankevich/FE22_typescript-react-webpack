import { useState } from 'react';
import style from './LoginForm.module.css';
import { ButtonForm } from '../../../ui/button/form-button/FormButton';
import { Email } from '../../../ui/input/Email';
import { Password } from '../../../ui/input/Password';
import { Text } from '../../../ui/text/Text';
import { Title } from '../../../ui/title/Title';

export const LoginForm: React.FC = () => {
  const [emailValue, setEmailValue] = useState('jimiswank@gmail.com');
  const [passwordValue, setPasswordValue] = useState('123456');
  return (
    <form className={style.container}>
      <Title>
        <span className={style.title}>
          <a href="link">Login</a> | Registration
        </span>
      </Title>
      <Email
        value={emailValue}
        onChange={(event) => setEmailValue(event.target.value)}
      ></Email>
      <Password
        value={passwordValue}
        onChange={(event) => setPasswordValue(event.target.value)}
      ></Password>
      <ButtonForm>Login</ButtonForm>
      <Text>
        Forgot your password?{' '}
        <span>
          <a className="main-link" href="Link">
            Reset password
          </a>
        </span>
      </Text>
    </form>
  );
};
