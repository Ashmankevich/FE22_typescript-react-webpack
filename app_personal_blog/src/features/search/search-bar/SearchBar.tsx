import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { actions } from '../searchSlice';
import { Dropdown } from './dropdown/Dropdown';
import style from './SearchBar.module.css';

type SearchBarProps = {
  children?: React.ReactNode;
};

export const SearchBar: React.FC<SearchBarProps> = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector((state) => state.search.response?.results ?? []);
  console.log(list);
  return (
    <div className={style.container}>
      <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
      <div>
        <input
          className={style.input}
          type="text"
          onInput={(e) => {
            dispatch(actions.search({ text: e.currentTarget.value }));
          }}
        ></input>
        {list.length > 0 ? (
          <div className={style.dropdownContainer}>
            <Dropdown
              list={list}
              onSelectedItem={() => dispatch(actions.reset)}
            ></Dropdown>
          </div>
        ) : null}
      </div>
    </div>
  );
};
