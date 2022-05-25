import styles from './FirstPage.module.css';
import { Header } from '../../features/header/Header';
import { Button } from '../../ui/button/Button';

type FirstPageProps = {};

export const FirstPage: React.FC<FirstPageProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <Header></Header>
        <h1 className={styles.title}>
          Make your <br></br>
          <a className={styles.link} href="Online">
            Blog <span>Online</span>
          </a>
        </h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          consequuntur inventore? Voluptates ea consequatur sunt unde ipsa.
          Quisquam doloremque maiores, natus minus deserunt ipsa sunt assumenda
          ad aspernatur eos quas cum repudiandae saepe possimus.
        </p>
        <Button>Learn more</Button>
      </div>
    </div>
  );
};
