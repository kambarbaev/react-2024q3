import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { setPage } from '../../features/searchSlice';
import { Button } from '@components/index';
import styles from './Pagination.module.css';

function Pagination() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { page, keyword } = useParams<{ keyword: string; page: string }>();
  const { currentPage, totalPages } = useAppSelector((state) => ({
    currentPage: state.search.pageNumber,
    totalPages: state.search.totalPages,
  }));

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
