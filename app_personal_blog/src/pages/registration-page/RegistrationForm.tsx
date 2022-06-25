import { useState } from 'react';
import style from './RegistrationForm.module.css';
import { Text } from '../../ui/text/Text';
import { Title } from '../../ui/title/Title';
import { AuthorizationTemplate } from '../../templates/authorization/AuthorizationTemplate';
import { Button } from '../../ui/button/Button';
import { AppPages } from '../../types';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { register } from '../../features/auth/authSlice';
import { Input } from '../../ui/input/Input';
import { Header } from '../../features/header/Header';

type RegistrationFormProps = {};

export const RegistrationForm: React.FC<RegistrationFormProps> = () => {
  const [userNameValue, setUserNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordConfirmValue, setPasswordConfirmValue] = useState('');
  const dispatch = useAppDispatch();
  return (
    <div className={style.container}>
      <Header></Header>
      <AuthorizationTemplate
        title={
          <Title>
            <div className={style.row}>
              <span className={style.title__active}>
                <Link to={AppPages.LOGIN_FORM}>Login</Link>
              </span>
              <span className={style.title__disable}>| Registration</span>
            </div>
          </Title>
        }
        text={
          <Text className={style.text}>
            If you have account you can{' '}
            <span className={style.link}>
              <Link to={AppPages.LOGIN_FORM}>login</Link>
            </span>
          </Text>
        }
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              register({
                email: emailValue,
                password: passwordValue,
                username: userNameValue,
              })
            );
          }}
          className={style.form}
        >
          <Input
            label="Username"
            type="text"
            value={userNameValue}
            onChange={(event) => setUserNameValue(event.target.value)}
          ></Input>
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
          <Input
            label="Confirm Password"
            type="password"
            value={passwordConfirmValue}
            onChange={(event) => setPasswordConfirmValue(event.target.value)}
          ></Input>
          <Button type="submit" className={style.button}>
            Registration
          </Button>
        </form>
      </AuthorizationTemplate>
    </div>
  );
};
