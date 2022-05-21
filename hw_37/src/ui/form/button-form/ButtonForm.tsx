import stylesButtonForm from './Button-form.module.css';

type ButtonFormProps = {
  children: React.ReactNode;
};

export const ButtonForm: React.FC<ButtonFormProps> = ({ children }) => {
  return (
    <button type="button" className={stylesButtonForm.button_form}>
      {children}
    </button>
  );
};
