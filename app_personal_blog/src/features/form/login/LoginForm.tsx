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
import { useAppDispatch } from '../../../hooks';
import { login } from '../../auth/authSlice';

type LoginFormProps = {};

export const LoginForm: React.FC<LoginFormProps> = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const dispatch = useAppDispatch();

  return (
    <div className={style.container}>
      <AuthorizationTemplate
        title={
          <Title>
            <div className={style.row}>
              <span className={style.title__disable}>Login |</span>
              <span className={style.title__active}>
                <Link to={AppPages.REGISTRATION}>Registration</Link>
              </span>
            </div>
          </Title>
        }
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(login({ email: emailValue, password: passwordValue }));
          }}
          className={style.form}
        >
          <Email
            value={emailValue}
            onChange={(event) => setEmailValue(event.target.value)}
          ></Email>
          <Password
            value={passwordValue}
            onChange={(event) => setPasswordValue(event.target.value)}
          ></Password>
          <Button className={style.button} type="submit">
            Login
          </Button>
        </form>
        <Text className={style.text}>
          Forgot your password?{' '}
          <span className={style.link}>
            <Link to={AppPages.REGISTRATION}>Reset password</Link>
          </span>
        </Text>
      </AuthorizationTemplate>
    </div>
  );
};
