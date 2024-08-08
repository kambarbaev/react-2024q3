import { useState } from 'react';
import { Card, Pagination } from '@components/index';
import { getPersonIdFromUrl } from '@utils/getPersonIdFromUrl';
import styles from './Main.module.css';
import { useTheme } from '@hooks/useTheme/useTheme';
import { useGetPersonsQuery } from '@services/api/newApi';
import { RootState } from '../../store/store.models';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { useEffect } from 'react';
import { setPage, setSearch, setTotalPages } from '../../features/searchSlice';
import { useParams } from 'react-router-dom';

function Main() {
  const { theme } = useTheme();
  const [openId, setOpenId] = useState<string | null>(null);
  const { pageNumber, search } = useAppSelector((state: RootState) => state.search);
  const { page, keyword } = useParams<{ keyword: string; page: string }>();
  const dispatch = useAppDispatch();

  const { data, isError, isLoading } = useGetPersonsQuery({ pageNumber, search });

  const handleCardClick = (id: string, isOpen: boolean) => {
    setOpenId(isOpen ? null : id);
  };

  useEffect(() => {
    if (page) {
      dispatch(setPage(+page));
    }
    if (keyword) {
      dispatch(setSearch(keyword));
    }
  }, [page, keyword, dispatch]);

  useEffect(() => {
    if (data && data.count !== undefined) {
      dispatch(setTotalPages(data.count));
    }
  }, [data, dispatch]);

  if (isLoading) {
    return <div className={`${styles['loading']} ${theme === 'light' ? '' : styles['dark']}`}>Loading...</div>;
  }

  if (isError) {
    return <div className={`${styles['no-data']} ${theme === 'light' ? '' : styles['dark']}`}>No available data</div>;
  }

  return (
    <main className={styles['main']}>
      {data && data.results && data.results.length > 0 && (
        <ul className={styles['list']}>
          {data.results.map((person) => (
            <Card
              key={person.name}
              person={person}
              isOpen={openId === getPersonIdFromUrl(person.url)}
              onCardClick={handleCardClick}
            />
          ))}
        </ul>
      )}
      {<Pagination />}
    </main>
  );
}

export default Main;
