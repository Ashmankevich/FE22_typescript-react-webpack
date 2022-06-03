import style from './FirstTab.module.css';

type FirstTabProps = {};

export const FirstTab: React.FC<FirstTabProps> = () => {
  return (
    <div className={style.wrapper}>
      <p className={style.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia saepe
        ipsam eligendi corporis optio commodi sapiente doloremque excepturi
        ullam eos dolorum molestiae incidunt ab, hic beatae porro quos
        architecto, nulla ut cupiditate. Sapiente quasi voluptatum aliquid ab
        inventore, nesciunt voluptatibus at quia nam beatae earum cumque quae
        vel quod numquam. Delectus ea reprehenderit voluptas similique officia
        doloremque at maxime sed, exercitationem voluptates reiciendis illo
        saepe, porro aspernatur neque consectetur sint temporibus ipsam? Vel
        quis dolorum nobis dolores unde quisquam a, rerum nisi aliquid nemo
        recusandae est officiis itaque corporis voluptas provident debitis iusto
        doloribus vero. Quidem nihil similique perspiciatis modi!
      </p>
    </div>
  );
};
