import { useState, useEffect } from 'react';
import { Header, Main } from '../../components';
import { fetchApi } from '../../serviсes/api';
import { People } from '../../serviсes/api.props';
import styles from './HomePage.module.css';

function HomePage() {
  const [searchData, setSearchData] = useState<People[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const savedSearchString = localStorage.getItem('searchString');

    if (savedSearchString) {
      handleSearch(savedSearchString);
    } else {
      handleSearch('');
    }
  }, []);

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
      <main className={styles['main']}>asd</main>
    </>
  );
}

export default HomePage;
