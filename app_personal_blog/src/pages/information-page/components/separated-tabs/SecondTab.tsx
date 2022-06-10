import style from './GeneralTab.module.css';

type SecondTabProps = {};

export const SecondTab: React.FC<SecondTabProps> = () => {
  return (
    <div className={style.wrapper}>
      <p className={style.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid soluta
        reiciendis explicabo vel laudantium nisi facilis numquam odio, laborum
        exercitationem eligendi, qui quia a autem! Sed voluptatum molestiae eos
        odio? Laboriosam vel placeat suscipit, quidem at ex mollitia obcaecati
        explicabo necessitatibus nisi deleniti officiis vitae quam doloremque
        atque soluta, magnam natus itaque quasi esse voluptas facere minima
        exercitationem?
      </p>
      <h3 className={style.title}>My list</h3>
      <ul className={style.list}>
        <li className={style.item}>item 1</li>
        <li className={style.item}>item 2</li>
        <li className={style.item}>item 3</li>
      </ul>
    </div>
  );
};
