import { useState } from 'react';
import styles from './Header.module.css';
import { HeaderProps } from './Header.props';
import { Button, SearchInput } from '..';
import { useNavigate } from 'react-router-dom';
import { useSearchQuery } from '../../hooks/useSearchString/useSearchString';

function Header({ handleSearch }: HeaderProps) {
  const [searchString, setSearchString] = useSearchQuery();

  const [inputValue, setInputValue] = useState<string>(searchString || '');

  const navigate = useNavigate();

  const handleInputChange = (value: string) => {
    setInputValue(value);
    setSearchString(value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate(`/search/${encodeURIComponent(inputValue)}`);
    handleSearch(inputValue);
  };

  return (
    <header className={styles['header']}>
      <div className={styles['logotype']}>
        <img src="/logotype.png" />
      </div>
      <form className={styles['form']} onSubmit={handleSubmit}>
        <SearchInput value={inputValue} onChange={handleInputChange} />
        <Button className={styles['search-button']} text="Search" />
      </form>
    </header>
  );
}

export default Header;
