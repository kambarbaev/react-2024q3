import styles from './Main.module.css';
import { MainProps } from './Main.props';
import Card from '../card/Card';

function Main({ searchData, loading, currentPage, totalPages, handlePage }: MainProps) {
  return (
    <main className={styles['main']}>
      {loading ? (
        <div className={styles['loading']}>Loading...</div>
      ) : (
        <ul className={styles['list']}>
          {searchData.length > 0 ? (
            searchData.map((person) => <Card key={person.name} person={person} currentPage={currentPage} />)
          ) : (
            <div className={styles['no-data']}>No available data</div>
          )}
        </ul>
      )}
      {totalPages > 1 && (
        <div className={styles['pagination']}>
          <button
            className={styles['pagination-button']}
            onClick={() => handlePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>{currentPage}</span>
          <button
            className={styles['pagination-button']}
            onClick={() => handlePage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </main>
  );
}

export default Main;
