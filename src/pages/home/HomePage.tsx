import { useState, useEffect } from 'react';
import { Header, Main } from '../../components';
import { fetchApi } from '../../serviсes/api';
import { People } from '../../serviсes/api.props';
import styles from './HomePage.module.css';
import { useSearchQuery } from '../../hooks/useSearchString/useSearchString';
import { Outlet } from 'react-router-dom';

function HomePage() {
  const [searchData, setSearchData] = useState<People[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchString] = useSearchQuery();

  useEffect(() => {
    handleSearch(searchString.toString());
  }, [searchString]);

  const handleSearch = (searchString: string) => {
    setLoading(true);
    fetchApi(searchString).then((data) => {
      setSearchData(data.results);
      setLoading(false);
    });
  };

  return (
    <>
      <aside className={styles['aside']}>
        <Header handleSearch={handleSearch} />
        <Main searchData={searchData} loading={loading} />
      </aside>
      <Outlet />
    </>
  );
}

export default HomePage;
