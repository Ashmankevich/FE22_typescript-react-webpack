import style from '../header/Header.module.css';
import { Burger } from './burger/BurgerBtn';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../AppContext';
import { SearchBar } from '../search';
import { UserButton } from './user-button/UserButton';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getUser } from '../user/userSlice';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const appRef = useContext(AppContext);
  const username = useAppSelector((state) => state.user.userName);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <header className={`${style.header} ${isOpen ? style.headerIsOpen : ''}`}>
      <Burger onClick={() => setIsOpen(!isOpen)}></Burger>
      <div className={style.row}>
        <UserButton>{username}</UserButton>
        <SearchBar></SearchBar>
        <div className={style.root}>
          <label className={style.switch} htmlFor="toggler">
            <input
              className={style.inputToggle}
              id="toggler"
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
              readOnly
            />
            <span className={style.slider} />
            <span className={style.wave} />
          </label>
        </div>
      </div>
    </header>
  );
};
