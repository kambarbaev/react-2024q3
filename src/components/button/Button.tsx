import { ButtonProps } from './Button.props';

function Button({ className, onClick, text }: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
