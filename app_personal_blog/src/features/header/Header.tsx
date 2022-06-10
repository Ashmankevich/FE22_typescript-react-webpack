import styles from '../header/Header.module.css';
import { Burger } from './burger/BurgerBtn';
import { useState } from 'react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={`${styles.header} ${isOpen ? styles.headerIsOpen : ''}`}>
      <Burger onClick={() => setIsOpen(!isOpen)}></Burger>
    </header>
  );
};
