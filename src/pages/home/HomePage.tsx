import { useState, useEffect } from 'react';
import { Header, Main } from '../../components';
import { fetchApi } from '../../serviсes/api';
import { People } from '../../serviсes/api.props';
import styles from './HomePage.module.css';
import { Outlet, useParams } from 'react-router-dom';
import { useSearchQuery } from '../../hooks/useSearchString/useSearchString';

function HomePage() {
  const [searchData, setSearchData] = useState<People[]>([]);
  const { keyword } = useParams<{ keyword: string }>();
  const [loading, setLoading] = useState<boolean>(false);
  const [searchString, setSearchString] = useSearchQuery();

  useEffect(() => {
    if (keyword) {
      setSearchString(keyword);
    }
  }, [keyword, setSearchString]);

  useEffect(() => {
    handleSearch(keyword || searchString);
  }, [keyword, searchString]);

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
