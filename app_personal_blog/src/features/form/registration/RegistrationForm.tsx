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

type RegistrationFormProps = {};

export const RegistrationForm: React.FC<RegistrationFormProps> = () => {
  const [userNameValue, setUserNameValue] = useState('James');
  const [emailValue, setEmailValue] = useState('jimiswank@gmail.com');
  const [passwordValue, setPasswordValue] = useState('123456');
  const [passwordConfirmValue, setPasswordConfirmValue] = useState('123456');
  const navigate = useNavigate();
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
        <form className={style.form}>
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
        </form>
      </AuthorizationTemplate>
      <Button
        className={style.button}
        onClick={() => navigate(AppPages.REGISTRATION_CONFIRMATION)}
      >
        Registration
      </Button>
      <Text>
        If you have account you can{' '}
        <span className={style.link}>
          <Link to={AppPages.LOGIN}>login</Link>
        </span>
      </Text>
    </div>
  );
};
