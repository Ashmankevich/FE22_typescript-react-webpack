import { PrimaryButton } from '../../ui/button/primary-button/PrimaryButton';
import { Title } from '../../ui/title/Title';
import styles from './WelcomeTemplate.module.css';

type WelcomeTemplateProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  actionButton: React.ReactNode;
};

export const WelcomeTemplate: React.FC<WelcomeTemplateProps> = (
  title,
  children,
  actionButton
) => {
  return (
    <div>
      {title}
      <Title>Template title</Title>
      <div>Template body</div>
      <PrimaryButton className={styles.button}>button</PrimaryButton>
    </div>
  );
};
