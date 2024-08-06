import { Outlet, useParams } from 'react-router-dom';
import { useTheme } from '@hooks/useTheme/useTheme';
import { Header, Main } from '@components/index';
import styles from './HomePage.module.css';
import { useGetPersonsQuery } from '@services/api/newApi';
import { RootState } from '../../store/store.models';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { useEffect } from 'react';
import { setPage, setSearch } from '../../features/searchSlice';

function HomePage() {
  const { pageNumber, search } = useAppSelector((state: RootState) => state.search);
  const { page, keyword } = useParams<{ keyword: string; page: string }>();
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (page) {
      dispatch(setPage(+page));
    }
    if (keyword) {
      dispatch(setSearch(keyword));
    }
  }, [page, keyword, dispatch]);

  const { data, error, isLoading } = useGetPersonsQuery({ pageNumber, search });

  return (
    <div className={`${styles['homepage']} ${theme === 'light' ? '' : styles['dark']}`}>
      <div className={styles['container']}>
        <aside>
          <Header />
          <Main
            searchData={data?.results || []}
            loading={isLoading}
            currentPage={+pageNumber!}
            totalPages={1 || 2}
            isError={error}
          />
        </aside>
        <Outlet />
      </div>
    </div>
  );
}

export default HomePage;
