import { Button } from '@components/index';
import styles from './Pagination.module.css';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { setPage } from '../../features/searchSlice';

function Pagination() {
  const { currentPage } = useAppSelector((state) => ({
    currentPage: state.search.pageNumber,
  }));

  const dispatch = useAppDispatch();

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
  };

  return (
    <div className={styles['pagination']}>
      <Button
        className={styles['pagination-button']}
        onClick={() => handlePageChange(currentPage! - 1)}
        disabled={currentPage === 1}
        text="Previous"
      />
      <span className={styles['page-counter']}>{currentPage}</span>
      <Button
        className={styles['pagination-button']}
        onClick={() => handlePageChange(currentPage! + 1)}
        // disabled={currentPage === totalPages}
        text="Next"
      />
    </div>
  );
}

export default Pagination;
