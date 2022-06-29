import style from '../header/Header.module.css';
import { Burger } from './burger/BurgerBtn';
import { useContext, useState } from 'react';
import { AppContext } from '../../AppContext';
import { SearchBar } from '../search';
import { UserButton } from './user-button/UserButton';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const appRef = useContext(AppContext);
  return (
    <header className={`${style.header} ${isOpen ? style.headerIsOpen : ''}`}>
      <Burger onClick={() => setIsOpen(!isOpen)}></Burger>

      <div className={style.row}>
        <UserButton>Username</UserButton>
        <SearchBar></SearchBar>
        <div className={style.switch}>
          <input
            className={style.switсher}
            type="checkbox"
            onChange={(event) => {
              const style = appRef?.current!.style!;
              if (event.target.checked) {
                style.setProperty('--primary-text-color', 'white');
                style.setProperty(
                  '--background-color',
                  'var(--ds-background-color)'
                );
                style.setProperty(
                  '--btn-background-color',
                  'var(--ds-btn-background-color)'
                );
              } else {
                style.removeProperty('--primary-text-color');
                style.removeProperty('--background-color');
                style.removeProperty('--btn-background-color');
              }
            }}
          />
          <span className={style.text}>Switch Theme</span>
        </div>
      </div>
    </header>
  );
};
