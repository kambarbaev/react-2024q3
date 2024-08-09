import { useNavigate, useParams } from 'react-router-dom';
import { selectPagination, useAppDispatch, useAppSelector } from '@hooks/redux';
import { Button } from '@components/index';
import styles from './Pagination.module.css';
import { setPage } from '@features/index';

function Pagination() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { keyword } = useParams<{ keyword: string }>();
  const { currentPage, totalPages } = useAppSelector(selectPagination);

  const handlePageChange = (pageNumber: number) => {
    dispatch(setPage(pageNumber));
    if (keyword) {
      navigate(`/search/${keyword}/page/${pageNumber}`);
    } else {
      navigate(`/people/page/${pageNumber}`);
    }
  };

  return (
    <div className={styles['pagination']}>
      <Button onClick={() => handlePageChange(currentPage! - 1)} disabled={currentPage === 1} text="Previous" />
      <span className={styles['page-counter']}>
        {currentPage} of {totalPages}
      </span>
      <Button onClick={() => handlePageChange(currentPage! + 1)} disabled={currentPage === totalPages} text="Next" />
    </div>
  );
}

export default Pagination;
