import styles from './Pagination.module.css';
import { PaginationProps } from './Pagination.props';

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className={styles['pagination']}>
      <button
        className={styles['pagination-button']}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>{currentPage}</span>
      <button
        className={styles['pagination-button']}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
