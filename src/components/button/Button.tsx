import { ButtonProps } from './Button.props';
import styles from './Button.module.css';

function Button({ onClick, text, disabled }: ButtonProps) {
  return (
    <button className={styles['button']} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

export default Button;
