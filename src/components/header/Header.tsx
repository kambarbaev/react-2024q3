import { useState } from 'react';
import styles from './Header.module.css';
import { HeaderProps } from './Header.props';
import { Button, SearchInput } from '..';

function Header({ handleSearch }: HeaderProps) {
  const [searchString, setSearchString] = useState<string>(localStorage.getItem('searchString') || '');

  const handleInputChange = (value: string) => {
    setSearchString(value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    localStorage.setItem('searchString', searchString.trim());
    handleSearch(searchString.trim());
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
