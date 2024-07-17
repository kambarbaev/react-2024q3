import styles from './Header.module.css';
import { HeaderProps } from './Header.props';
import { Button, SearchInput } from '..';
import { useNavigate, useParams } from 'react-router-dom';
import { useSearchQuery } from '../../hooks/useSearchString/useSearchString';
import { useEffect, useState } from 'react';

function Header({ handleSearch, currentPage, handlePage }: HeaderProps) {
  const { keyword, page } = useParams<{ keyword: string; page: string }>();
  const [searchString, setSearchString] = useSearchQuery();
  const [inputValue, setInputValue] = useState<string>(searchString);
  const navigate = useNavigate();

  useEffect(() => {
    if (page && keyword) {
      handleSearch(keyword, currentPage!);
      setSearchString(keyword);
      navigate(`/search/${keyword}/page/${currentPage}`);
    } else {
      handleSearch(searchString, currentPage!);
      handlePage!(currentPage!);
    }
  }, [keyword, page, setSearchString, currentPage]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
    setSearchString(value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    handleSearch(inputValue, 1);
    handlePage!(1);
  };

  return (
    <header className={styles['header']}>
      <div className={styles['logotype']}>
        <img src="/logotype.png" />
      </div>
      <form className={styles['form']} onSubmit={handleSubmit}>
        <SearchInput value={searchString} onChange={handleInputChange} />
        <Button className={styles['search-button']} text="Search" />
      </form>
    </header>
  );
}

export default Header;
