import style from './BurgerBtn.module.css';
import { useState } from 'react';
import { MenuNav } from '../menu/MenuNav';

type BurgerProps = {
  children?: React.ReactNode;
  onClick: () => void;
};

export const Burger: React.FC<BurgerProps> = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={isOpen ? `${style.burgerBtnOpen}` : `${style.burgerBtnClose}`}
      onClick={() => {
        setIsOpen(!isOpen);
        onClick();
      }}
    >
      <div className={style.active}></div>
      <div className={isOpen ? `${style.menuOpen}` : `${style.menuClose}`}>
        <MenuNav isAuthorized={true}></MenuNav>
      </div>
    </div>
  );
};
