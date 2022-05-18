import { useState } from 'react';
import { Input } from './input/Input';

export const Form: React.FC = () => {
  const [emailValue, setEmailValue] = useState('Ashmankevich.a@gmail.com');
  return (
    <Input
      value={emailValue}
      onChange={(event) => setEmailValue(event.target.value)}
    ></Input>
  );
};
