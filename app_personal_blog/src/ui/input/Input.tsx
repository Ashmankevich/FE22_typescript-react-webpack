import style from './Input.module.css';

type InputProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  type: string;
  label: string;
};

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  label,
  type,
}) => {
  return (
    <label className={style.label}>
      {label}
      <input
        className={style.input}
        type={type}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
