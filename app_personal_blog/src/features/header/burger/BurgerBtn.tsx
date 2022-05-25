import styles from './BurgerBtn.module.css';
import { Menu } from '../menu/Menu';
import { useState } from 'react';

type BurgerProps = {
  children?: React.ReactNode;
  onClick: () => void;
};

export const Burger: React.FC<BurgerProps> = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={
        isOpen ? `${styles.burgerBtnOpen}` : `${styles.burgerBtnClose}`
      }
      onClick={() => {
        setIsOpen(!isOpen);
        onClick();
      }}
    >
      <div className={styles.active}></div>
      <div className={isOpen ? `${styles.menuOpen}` : `${styles.menuClose}`}>
        <Menu></Menu>
      </div>
    </div>
  );
};
