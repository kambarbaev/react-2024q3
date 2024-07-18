import styles from './Main.module.css';
import { MainProps } from './Main.props';
import Card from '../card/Card';
import Pagination from '../pagination/Pagination';
import { useState } from 'react';
import { getPersonIdFromUrl } from '../../utils/getPersonIdFromUrl';

function Main({ searchData, loading, currentPage, totalPages, handlePage }: MainProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleCardClick = (id: string, isOpen: boolean) => {
    setOpenId(isOpen ? null : id);
  };

  return (
    <main className={styles['main']}>
      {loading ? (
        <div className={styles['loading']}>Loading...</div>
      ) : (
        <ul className={styles['list']}>
          {searchData.length > 0 ? (
            searchData.map((person) => (
              <Card
                key={person.name}
                person={person}
                currentPage={currentPage}
                isOpen={openId === getPersonIdFromUrl(person.url)}
                onCardClick={handleCardClick}
              />
            ))
          ) : (
            <div className={styles['no-data']}>No available data</div>
          )}
        </ul>
      )}
      {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePage} />}
    </main>
  );
}

export default Main;
