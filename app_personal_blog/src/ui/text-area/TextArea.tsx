import React from 'react';
import style from './TextArea.module.css';

type TextareaProps = {
  value: string;
  label?: string;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
};

export const Textarea: React.FC<TextareaProps> = ({
  value,
  label,
  className,
  onChange,
}) => {
  return (
    <label className={`${style.label} ${className}`}>
      {label}
      <textarea
        className={style.textarea}
        onChange={onChange}
        value={value}
      ></textarea>
    </label>
  );
};
