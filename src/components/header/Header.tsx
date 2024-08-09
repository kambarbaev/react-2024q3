import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTheme } from '@hooks/useTheme/useTheme';
import { Button, SearchInput } from '@components/index';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import styles from './Header.module.css';
import { setPage, setSearch } from '@features/index';

function Header() {
  const { keyword } = useParams<{ keyword: string }>();
  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state) => state.search);
  const [inputValue, setInputValue] = useState<string>(keyword || search || '');
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const buttonText = theme === 'light' ? 'Dark' : 'Light';

  useEffect(() => {
    if (keyword) {
      setInputValue(keyword);
      dispatch(setSearch(keyword));
    }
  }, [keyword, dispatch]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();

    if (trimmedValue) {
      dispatch(setSearch(trimmedValue));
      dispatch(setPage(1));
      navigate(`/search/${encodeURIComponent(trimmedValue)}/page/1`);
    } else {
      dispatch(setSearch(''));
      dispatch(setPage(1));
      navigate(`/people/page/1`);
    }
  };

  return (
    <header className={`${styles['header']} ${theme === 'light' ? '' : styles['dark']}`}>
      <div className={styles['logotype']}>
        <img src="/logotype.png" />
      </div>
      <form className={styles['form']} onSubmit={handleSubmit}>
        <SearchInput value={inputValue} onChange={handleInputChange} />
        <Button text="Search" />
      </form>
      <Button text={buttonText} onClick={toggleTheme} />
    </header>
  );
}

export default Header;
