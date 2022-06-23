import { useState } from 'react';
import style from './RegistrationForm.module.css';
import { UserName } from '../../../ui/input/UserName';
import { Email } from '../../../ui/input/Email';
import { Password } from '../../../ui/input/Password';
import { PasswordConfirm } from '../../../ui/input/PasswordConfirm';
import { Text } from '../../../ui/text/Text';
import { Title } from '../../../ui/title/Title';
import { AuthorizationTemplate } from '../../../templates/authorization/AuthorizationTemplate';
import { Button } from '../../../ui/button/Button';
import { AppPages } from '../../../types';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks';
import { register } from '../../auth/authSlice';

type RegistrationFormProps = {};

export const RegistrationForm: React.FC<RegistrationFormProps> = () => {
  const [userNameValue, setUserNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordConfirmValue, setPasswordConfirmValue] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <div className={style.container}>
      <AuthorizationTemplate
        title={
          <Title>
            <div className={style.row}>
              <span className={style.title__active}>
                <Link to={AppPages.LOGIN}>Login</Link>
              </span>
              <span className={style.title__disable}>| Registration</span>
            </div>
          </Title>
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
          <UserName
            value={userNameValue}
            onChange={(event) => setUserNameValue(event.target.value)}
          ></UserName>
          <Email
            value={emailValue}
            onChange={(event) => setEmailValue(event.target.value)}
          ></Email>
          <Password
            value={passwordValue}
            onChange={(event) => setPasswordValue(event.target.value)}
          ></Password>
          <PasswordConfirm
            value={passwordConfirmValue}
            onChange={(event) => setPasswordConfirmValue(event.target.value)}
          ></PasswordConfirm>
          <Button
            type="submit"
            className={style.button}
            onClick={() => navigate(AppPages.REGISTRATION_CONFIRMATION)}
          >
            Registration
          </Button>
        </form>
        <Text className={style.text}>
          If you have account you can{' '}
          <span className={style.link}>
            <Link to={AppPages.LOGIN}>login</Link>
          </span>
        </Text>
      </AuthorizationTemplate>
    </div>
  );
};
