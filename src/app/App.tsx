import styles from './App.module.css';
import { Header, Main } from '../components';
import { People } from '../serviсes/api.props';
import { fetchApi } from '../serviсes/api';
import { useEffect, useState } from 'react';

function App() {
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
    <div className={styles['app']}>
      <Header handleSearch={handleSearch} />
      <Main searchData={searchData} loading={loading} />
    </div>
  );
}

export default App;
