import style from './Input.module.css';

type EmailProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export const Email: React.FC<EmailProps> = ({ value, onChange }) => {
  return (
    <label className={style.label}>
      Email
      <input
        type="email"
        value={value}
        onChange={onChange}
        className={style.input_form}
      ></input>
    </label>
  );
};
