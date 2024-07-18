import { useNavigate, useLocation } from 'react-router-dom';
import { CardProps } from './Card.props';
import { getPersonIdFromUrl } from '../../utils/getPersonIdFromUrl';
import style from './Card.module.css';
import { useEffect, useState } from 'react';

function Card({ person, currentPage }: CardProps) {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const id = getPersonIdFromUrl(person.url);

  useEffect(() => {
    if (location.pathname.includes(id)) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [id, location.pathname, open]);

  const handleClick = () => {
    if (!open) {
      setOpen(true);
      if (location.pathname.includes('search')) {
        const keyword = location.pathname.split('/')[2];
        navigate(`/search/${keyword}/page/${currentPage}/${id}`);
      } else {
        navigate(`/people/page/${currentPage}/${id}`);
      }
    } else {
      setOpen(false);
      if (location.pathname.includes('search')) {
        const keyword = location.pathname.split('/')[2];
        navigate(`/search/${keyword}/page/${currentPage}`);
      } else {
        navigate(`/people/page/${currentPage}`);
      }
    }
  };

  return (
    <li className={style['card']} onClick={handleClick}>
      <h2 className={style['name']}>{person.name}</h2>
    </li>
  );
}

export default Card;
