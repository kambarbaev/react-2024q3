import { Outlet } from 'react-router-dom';
import { useTheme } from '@hooks/useTheme/useTheme';
import { Header, Main } from '@components/index';
import styles from './HomePage.module.css';
import { useGetPersonsQuery } from '@services/api/newApi';
import { RootState } from '../../store/store.models';
import { useAppSelector } from '@hooks/redux';

function HomePage() {
  // const { page } = useParams<{ keyword: string; page: string }>();
  const { page, search } = useAppSelector((state: RootState) => state.search);
  const { theme } = useTheme();
  // const [searchString] = useSearchQuery();

  const { data, error, isLoading } = useGetPersonsQuery({ page, search });

  return (
    <div className={`${styles['homepage']} ${theme === 'light' ? '' : styles['dark']}`}>
      <div className={styles['container']}>
        <aside>
          <Header />
          <Main
            searchData={data?.results || []}
            loading={isLoading}
            currentPage={+page!}
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
