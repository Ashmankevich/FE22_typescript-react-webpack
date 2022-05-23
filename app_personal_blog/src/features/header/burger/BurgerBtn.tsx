import styles from '.BurgerBtn.module.css';
import { Menu } from '../menu/Menu';
import { useState } from 'react';

type BurgerBtnProps = {
  children?: React.ReactNode;
  onClick: () => void;
};

/*export const Burger: React.FC<BurgerBtnProps> = ({ 
   children,
   onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  return ()
};*/
