import styles from './Input.module.css';

type InputProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return (
    <label className={styles.label}>
      Email
      <input
        type="email"
        value={value}
        onChange={onChange}
        className={styles.input}
      ></input>
    </label>
  );
};
