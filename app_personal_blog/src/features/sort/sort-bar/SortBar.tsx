import style from './SortBar.module.css';

type SortBarProps = {
  onChange: (e: any) => void;
};

export const SortBar: React.FC<SortBarProps> = ({ onChange }) => {
  return (
    <div>
      <select
        className={style.row}
        onChange={onChange}
        defaultValue="Selected by:"
      >
        <option>filter</option>
        <option>date</option>
        <option>title</option>
        <option>text</option>
      </select>
    </div>
  );
};
