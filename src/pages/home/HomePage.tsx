import { useState, useEffect, useCallback } from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { fetchApi, People } from '../../serviсes/index';
import { useSearchQuery } from '@hooks/index';
import { Header, Main } from '@components/index';

function HomePage() {
  const [searchData, setSearchData] = useState<People[]>([]);
  const { keyword, page } = useParams<{ keyword: string; page: string }>();
  const [loading, setLoading] = useState<boolean>(false);
  const [searchString, setSearchString] = useSearchQuery();
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(page ? +page : 1);
  const navigate = useNavigate();

  const handleSearch = useCallback((searchString: string, page: number) => {
    setLoading(true);
    fetchApi(searchString, page)
      .then((data) => {
        setSearchData(data.results);
        setTotalPages(Math.ceil(data.count / 10));
        setLoading(false);
      })
      .catch((data) => {
        console.error(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (keyword) {
      setSearchString(keyword);
      handleSearch(keyword, currentPage);
    } else if (page) {
      setCurrentPage(+page);
      handleSearch(keyword ? keyword : '', +page);
    } else {
      handleSearch(searchString, currentPage);
    }
  }, [keyword, page, searchString, currentPage, handleSearch, setSearchString]);

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
