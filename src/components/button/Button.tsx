import { Component } from 'react';
import { ButtonProps } from './Button.props';

class Button extends Component<ButtonProps> {
  render() {
    const { className, onClick, text } = this.props;
    return (
      <button className={className} onClick={onClick}>
        {text}
      </button>
    );
  }
}

export default Button;
