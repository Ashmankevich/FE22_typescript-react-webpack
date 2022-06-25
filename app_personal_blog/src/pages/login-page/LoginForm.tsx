import { useState } from 'react';
import { AuthorizationTemplate } from '../../templates/authorization/AuthorizationTemplate';
import style from './LoginForm.module.css';
import { Button } from '../../ui/button/Button';
import { Text } from '../../ui/text/Text';
import { Title } from '../../ui/title/Title';
import { Link } from 'react-router-dom';
import { AppPages } from '../../types';
import { useAppDispatch } from '../../hooks';
import { login } from '../../features/auth/authSlice';
import { Input } from '../../ui/input/Input';
import { Header } from '../../features/header/Header';

type LoginFormProps = {};

export const LoginForm: React.FC<LoginFormProps> = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const dispatch = useAppDispatch();

  return (
    <div className={style.container}>
      <Header></Header>
      <AuthorizationTemplate
        title={
          <Title>
            <div className={style.row}>
              <span className={style.title__disable}>Login |</span>
              <span className={style.title__active}>
                <Link to={AppPages.REGISTRATION_FORM}>Registration</Link>
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
          <Input
            label="Email"
            type="email"
            value={emailValue}
            onChange={(event) => setEmailValue(event.target.value)}
          ></Input>
          <Input
            label="Password"
            type="password"
            value={passwordValue}
            onChange={(event) => setPasswordValue(event.target.value)}
          ></Input>
          <Button className={style.button} type="submit">
            Login
          </Button>
        </form>
        <Text className={style.text}>
          Forgot your password?{' '}
          <span className={style.link}>
            <Link to={AppPages.REGISTRATION_FORM}>Reset password</Link>
          </span>
        </Text>
      </AuthorizationTemplate>
    </div>
  );
};
