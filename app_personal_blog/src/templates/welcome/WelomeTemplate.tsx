import { PrimaryButton } from '../../ui/button/primary-button/PrimaryButton';
import { Title } from '../../ui/title/Title';
import styles from './WelcomeTemplate.module.css';

type WelcomeTemplateProps = {};

export const WelcomeTemplate: React.FC<WelcomeTemplateProps> = () => {
  return (
    <div>
      <Title>Template title</Title>
      <div>Template body</div>
      <PrimaryButton className={styles.button}>button</PrimaryButton>
    </div>
  );
};
