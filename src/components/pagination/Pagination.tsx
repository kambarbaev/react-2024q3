import { Button } from '@components/index';
import { PaginationProps } from './Pagination.props';
import styles from './Pagination.module.css';

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className={styles['pagination']}>
      <Button
        className={styles['pagination-button']}
        onClick={() => onPageChange!(currentPage! - 1)}
        disabled={currentPage === 1}
        text="Previous"
      />
      <span className={styles['page-counter']}>{currentPage}</span>
      <Button
        className={styles['pagination-button']}
        onClick={() => onPageChange!(currentPage! + 1)}
        disabled={currentPage === totalPages}
        text="Next"
      />
    </div>
  );
}

export default Pagination;
