import style from './Card.module.css';
import { CardProps } from './Card.props';

function Card({ person }: CardProps) {
  return (
    <li className={style['card']}>
      <h2 className={style['name']}>{person.name}</h2>
    </li>
  );
}

export default Card;
