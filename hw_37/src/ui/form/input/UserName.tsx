import style from './Input.module.css';

type UserNameProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export const UserName: React.FC<UserNameProps> = ({ value, onChange }) => {
  return (
    <label className={style.label}>
      User Name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={style.input_form}
      ></input>
    </label>
  );
};
