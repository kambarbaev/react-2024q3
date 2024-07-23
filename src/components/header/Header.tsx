import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSearchQuery } from '@hooks/useSearchString/useSearchString';
import { useTheme } from '@hooks/useTheme/useTheme';
import { Button, SearchInput } from '@components/index';
import { HeaderProps } from './Header.props';
import styles from './Header.module.css';

function Header({ handleSearch, handlePage }: HeaderProps) {
  const { keyword } = useParams<{ keyword: string }>();
  const [searchString, setSearchString] = useSearchQuery();
  const [inputValue, setInputValue] = useState<string>(keyword || searchString || '');
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const buttonText = theme === 'light' ? 'Dark' : 'Light';

  useEffect(() => {
    if (keyword) {
      setInputValue(keyword);
      setSearchString(keyword);
    }
  }, [keyword, setSearchString]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
    setSearchString(value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handleSearch(inputValue, 1);
    handlePage!(1);
    if (inputValue.trim()) {
      navigate(`/search/${encodeURIComponent(inputValue.trim())}/page/1`);
    } else {
      navigate(`/people/page/1`);
    }
  };

  return (
    <header className={`${styles['header']} ${theme === 'light' ? '' : styles['dark']}`}>
      <div className={styles['logotype']}>
        <img src="/logotype.png" />
      </div>
      <form className={styles['form']} onSubmit={handleSubmit}>
        <SearchInput value={searchString} onChange={handleInputChange} />
        <Button text="Search" />
      </form>
      <Button text={buttonText} onClick={toggleTheme} />
    </header>
  );
}

export default Header;
