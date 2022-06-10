import { Header } from '../../features/header/Header';
import { RegistrationForm } from '../../features/form/registration/RegistrationForm';

type RegistrationPageProps = {};

export const RegistrationPage: React.FC<RegistrationPageProps> = () => {
  return (
    <div>
      <Header></Header>
      <RegistrationForm></RegistrationForm>
    </div>
  );
};
