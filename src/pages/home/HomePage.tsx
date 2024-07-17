import { useState, useCallback } from 'react';
import { Header, Main } from '../../components';
import styles from './HomePage.module.css';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { People } from '../../serviсes/api.props';
import { fetchApi } from '../../serviсes/api';

function HomePage() {
  const [searchData, setSearchData] = useState<People[]>([]);
  const { keyword } = useParams<{ keyword: string; page: string }>();
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const navigate = useNavigate();

  const handleSearch = useCallback((searchString: string, page: number) => {
    setLoading(true);
    fetchApi(searchString, page).then((data) => {
      setSearchData(data.results);
      setTotalPages(Math.ceil(data.count / 10));
      setLoading(false);
    });
  }, []);

  const handlePage = (page: number) => {
    setCurrentPage(page);
    if (keyword) {
      navigate(`/search/${keyword}/page/${page}`);
    } else {
      navigate(`/people/page/${page}`);
    }
  };

  return (
    <>
      <aside className={styles['aside']}>
        <Header handleSearch={handleSearch} currentPage={currentPage} totalPages={totalPages} handlePage={handlePage} />
        <Main
          searchData={searchData}
          loading={loading}
          currentPage={currentPage}
          totalPages={totalPages}
          handlePage={handlePage}
        />
      </aside>
      <Outlet />
    </>
  );
}

export default HomePage;
