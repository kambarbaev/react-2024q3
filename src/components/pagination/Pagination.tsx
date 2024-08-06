import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { setPage } from '../../features/searchSlice';
import { Button } from '@components/index';
import styles from './Pagination.module.css';

function Pagination() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { currentPage, totalPages } = useAppSelector((state) => ({
    currentPage: state.search.pageNumber,
    totalPages: state.search.totalPages,
  }));

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
    navigate(`/people/page/${page}`);
  };

  return (
    <div className={styles['pagination']}>
      <Button
        className={styles['pagination-button']}
        onClick={() => handlePageChange(currentPage! - 1)}
        disabled={currentPage === 1}
        text="Previous"
      />
      <span className={styles['page-counter']}>
        {currentPage} of {totalPages}
      </span>
      <Button
        className={styles['pagination-button']}
        onClick={() => handlePageChange(currentPage! + 1)}
        disabled={currentPage === totalPages}
        text="Next"
      />
    </div>
  );
}

export default Pagination;
