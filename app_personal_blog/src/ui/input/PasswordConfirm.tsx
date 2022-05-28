import style from './Input.module.css';

type PasswordConfirmProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export const PasswordConfirm: React.FC<PasswordConfirmProps> = ({
  value,
  onChange,
}) => {
  return (
    <label className={style.label}>
      Confirm Password
      <input
        type="password"
        value={value}
        onChange={onChange}
        className={style.input_form}
      ></input>
    </label>
  );
};
