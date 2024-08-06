import { useState } from 'react';
import { Card, Pagination } from '@components/index';
import { getPersonIdFromUrl } from '@utils/getPersonIdFromUrl';
import { MainProps } from './Main.props';
import styles from './Main.module.css';
import { useTheme } from '@hooks/useTheme/useTheme';

function Main({ searchData, loading, currentPage, totalPages, handlePage }: MainProps) {
  const { theme } = useTheme();
  const [openId, setOpenId] = useState<string | null>(null);

  const handleCardClick = (id: string, isOpen: boolean) => {
    setOpenId(isOpen ? null : id);
  };

  return (
    <main className={styles['main']}>
      {loading ? (
        <div className={`${styles['loading']} ${theme === 'light' ? '' : styles['dark']}`}>Loading...</div>
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
            <div className={`${styles['no-data']} ${theme === 'light' ? '' : styles['dark']}`}>No available data</div>
          )}
        </ul>
      )}
      {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePage} />}
    </main>
  );
}

export default Main;
