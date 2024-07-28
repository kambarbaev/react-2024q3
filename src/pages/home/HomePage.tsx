import { Outlet, useParams } from 'react-router-dom';
import { useTheme } from '@hooks/useTheme/useTheme';
import { Header, Main } from '@components/index';
import styles from './HomePage.module.css';
import { peopleApi } from '@services/index';

function HomePage() {
  const { page } = useParams<{ keyword: string; page: string }>();
  const { theme } = useTheme();

  const { data, error, isLoading } = peopleApi.useGetPersonsQuery(page ? +page : 1);

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
