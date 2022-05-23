import { useState } from 'react'; // хук для хранения состояния (когда компоненет первый раз ренедрится происходит инициализация)
import { UserName } from './input/UserName';
import { Email } from './input/Email';
import { Password } from './input/Password';
import { PasswordConfirm } from './input/PasswordConfirm';
import { ButtonForm } from './button-form/ButtonForm';
import { Text } from './text/TextForm';

export const Registration: React.FC = () => {
  const [userNameValue, setUserNameValue] = useState('James');
  const [emailValue, setEmailValue] = useState('jimiswank@gmail.com');
  const [passwordValue, setPasswordValue] = useState('123456');
  const [passwordConfirmValue, setPasswordConfirmValue] = useState('123456');
  return (
    <form>
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
      <ButtonForm>Home</ButtonForm>
      <Text>
        If you have account you can{' '}
        <span>
          <a className="main-link" href="#">
            login
          </a>
        </span>
      </Text>
    </form>
  );
};
