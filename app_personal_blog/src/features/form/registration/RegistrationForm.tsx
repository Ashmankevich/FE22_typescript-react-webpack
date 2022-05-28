import { useState } from 'react'; // хук для хранения состояния (когда компоненет первый раз ренедрится происходит инициализация)
import style from './RegistrationForm.module.css';
import { UserName } from '../../../ui/input/UserName';
import { Email } from '../../../ui/input/Email';
import { Password } from '../../../ui/input/Password';
import { PasswordConfirm } from '../../../ui/input/PasswordConfirm';
import { ButtonForm } from '../../../ui/button/form-button/FormButton';
import { Text } from '../../../ui/text/Text';
import { Title } from '../../../ui/title/Title';

export const RegistrationForm: React.FC = () => {
  const [userNameValue, setUserNameValue] = useState('James');
  const [emailValue, setEmailValue] = useState('jimiswank@gmail.com');
  const [passwordValue, setPasswordValue] = useState('123456');
  const [passwordConfirmValue, setPasswordConfirmValue] = useState('123456');
  return (
    <form className={style.container}>
      <Title>
        <span className={style.title}>
          Login |<a href="link">Registration</a>
        </span>
      </Title>
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
      <div className={style.last__input}>
        <PasswordConfirm
          value={passwordConfirmValue}
          onChange={(event) => setPasswordConfirmValue(event.target.value)}
        ></PasswordConfirm>
      </div>
      <ButtonForm>Home</ButtonForm>
      <Text>
        If you have account you can{' '}
        <span>
          <a className="main-link" href="main">
            login
          </a>
        </span>
      </Text>
    </form>
  );
};
