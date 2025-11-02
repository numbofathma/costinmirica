import style from './CustomButton.module.scss';

interface ICustomButtonProps {
  type: 'reset' | 'submit' | 'button';
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const CustomButton = ({ children, onClick, type = 'button', disabled = false }: ICustomButtonProps) => (
  <button type={type} disabled={disabled} className={`button-base ${style.button}`} onClick={onClick}>
    {children}
  </button>
);

export default CustomButton;
