import { useState } from 'react'; // хук для хранения состояния (когда компоненет первый раз ренедрится происходит инициализация)
import { ButtonForm } from './button-form/ButtonForm';
import { Email } from './input/Email';
import { Password } from './input/Password';
import { Text } from './text/TextForm';
import { HeaderForm } from './header-form/HeaderForm';

export const Login: React.FC = () => {
  const [emailValue, setEmailValue] = useState('jimiswank@gmail.com');
  const [passwordValue, setPasswordValue] = useState('123456');
  return (
    <form>
      <HeaderForm>
        <span>
          <a className="main-link" href="#">
            Login
          </a>
        </span>
      </HeaderForm>
      <HeaderForm>
        <span>
          <a className="main-link" href="#">
            Registartion
          </a>
        </span>
      </HeaderForm>
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
          <a className="main-link" href="#">
            Reset password
          </a>
        </span>
      </Text>
    </form>
  );
};
