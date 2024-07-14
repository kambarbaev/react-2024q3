import { useNavigate } from 'react-router-dom';
import style from './Card.module.css';
import { CardProps } from './Card.props';
import { getPersonIdFromUrl } from '../../utils/getPersonIdFromUrl';

function Card({ person }: CardProps) {
  const navigate = useNavigate();
  const id = getPersonIdFromUrl(person.url);

  const handleClick = () => {
    navigate(`/people/${id}`);
  };

  return (
    <li className={style['card']} onClick={handleClick}>
      <h2 className={style['name']}>{person.name}</h2>
    </li>
  );
}

export default Card;
