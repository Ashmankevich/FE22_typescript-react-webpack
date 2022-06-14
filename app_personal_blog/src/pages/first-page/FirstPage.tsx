import style from './FirstPage.module.css';
import { Header } from '../../features/header/Header';
import { Button } from '../../ui/button/Button';
import { AppPages } from '../../types';
import { Link } from 'react-router-dom';

type FirstPageProps = {};

export const FirstPage: React.FC<FirstPageProps> = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.page}>
          <Header></Header>
          <h1 className={style.title}>
            Make your <br></br>
            <span className={style.link}>
              Blog <Link to={AppPages.ALL_POST}>Online</Link>
            </span>
          </h1>
          <p className={style.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            consequuntur inventore? Voluptates ea consequatur sunt unde ipsa.
            Quisquam doloremque maiores, natus minus deserunt ipsa sunt
            assumenda ad aspernatur eos quas cum repudiandae saepe possimus.
          </p>
          <Button className={style.button}>Learn more</Button>
        </div>
      </div>
    </div>
  );
};
