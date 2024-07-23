import { useNavigate, useLocation } from 'react-router-dom';
import { CardProps } from './Card.props';
import { getPersonIdFromUrl } from '@utils/getPersonIdFromUrl';
import styles from './Card.module.css';
import { useTheme } from '@hooks/useTheme/useTheme';

function Card({ person, currentPage, isOpen, onCardClick }: CardProps) {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const id = getPersonIdFromUrl(person.url);

  const handleClick = () => {
    onCardClick(id, isOpen);
    if (!isOpen) {
      if (location.pathname.includes('search')) {
        const keyword = location.pathname.split('/')[2];
        navigate(`/search/${keyword}/page/${currentPage}/${id}`);
      } else {
        navigate(`/people/page/${currentPage}/${id}`);
      }
    } else {
      if (location.pathname.includes('search')) {
        const keyword = location.pathname.split('/')[2];
        navigate(`/search/${keyword}/page/${currentPage}`);
      } else {
        navigate(`/people/page/${currentPage}`);
      }
    }
  };

  return (
    <li className={`${styles['card']} ${theme === 'light' ? '' : styles['dark']}`} onClick={handleClick}>
      <h2 className={`${styles['name']} ${theme === 'light' ? '' : styles['dark']}`}>{person.name}</h2>
    </li>
  );
}

export default Card;
