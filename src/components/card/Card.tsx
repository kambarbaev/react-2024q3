import { useNavigate, useLocation } from 'react-router-dom';
import style from './Card.module.css';
import { CardProps } from './Card.props';
import { getPersonIdFromUrl } from '../../utils/getPersonIdFromUrl';

function Card({ person, currentPage }: CardProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const id = getPersonIdFromUrl(person.url);

  const handleClick = () => {
    if (location.pathname.includes('search')) {
      const keyword = location.pathname.split('/')[2];
      navigate(`/search/${keyword}/page/${currentPage}/${id}`);
    } else {
      navigate(`/people/page/${currentPage}/${id}`);
    }
  };

  return (
    <li className={style['card']} onClick={handleClick}>
      <h2 className={style['name']}>{person.name}</h2>
    </li>
  );
}

export default Card;
