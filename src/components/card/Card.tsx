import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '@hooks/redux';
import { useTheme } from '@hooks/useTheme/useTheme';
import { getPersonIdFromUrl } from '@utils/getPersonIdFromUrl';
import { CardProps } from './Card.props';
import { RootState } from '../../store/store.models';
import styles from './Card.module.css';

function Card({ person, isOpen, onCardClick }: CardProps) {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const id = getPersonIdFromUrl(person.url);
  const { pageNumber } = useAppSelector((state: RootState) => state.search);
  const { keyword } = useParams<{ keyword: string; page: string }>();

  const handleClick = () => {
    onCardClick(id, isOpen);
    if (!isOpen) {
      if (keyword) {
        navigate(`/search/${keyword}/page/${pageNumber}/${id}`);
      } else {
        navigate(`/people/page/${pageNumber}/${id}`);
      }
    } else {
      if (keyword) {
        navigate(`/search/${keyword}/page/${pageNumber}`);
      } else {
        navigate(`/people/page/${pageNumber}`);
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
