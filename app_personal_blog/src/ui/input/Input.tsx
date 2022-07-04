import style from './Input.module.css';

type InputProps = {
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  type: string;
  label: string;
  className?: string;
};

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  label,
  type,
  className = '',
}) => {
  return (
    <label className={style.label}>
      {label}
      <input
        className={`${style.input} ${className}`}
        type={type}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
