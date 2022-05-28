import style from './Input.module.css';

type PasswordProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export const Password: React.FC<PasswordProps> = ({ value, onChange }) => {
  return (
    <label className={style.label}>
      Password
      <input
        type="password"
        value={value}
        onChange={onChange}
        className={style.input_form}
      ></input>
    </label>
  );
};
