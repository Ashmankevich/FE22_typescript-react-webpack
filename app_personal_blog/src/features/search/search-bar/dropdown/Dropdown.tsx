import { Link } from 'react-router-dom';
import { AppPages } from '../../../../types';
import { Post } from '../../../../types/post';
import style from './DropDown.module.css';

type DropdownProps = {
  list: Post[];
  onSelectedItem: (id: string | number) => void;
};

export const Dropdown: React.FC<DropdownProps> = ({ list, onSelectedItem }) => {
  return (
    <ul className={style.ul}>
      {list.map((item) => (
        <Link
          to={`${AppPages.POST_PAGE}/${item.id}`}
          key={item.id}
          onClick={() => onSelectedItem(item.id)}
        >
          <li className={style.li} key={item.id}>
            <img className={style.img} src={item.image} alt={item.title} />
            {item.title}
          </li>
        </Link>
      ))}
    </ul>
  );
};
