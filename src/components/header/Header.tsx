import styles from './Header.module.css';
import { HeaderProps } from './Header.props';
import { Button, SearchInput } from '..';
import { useNavigate } from 'react-router-dom';
import { useSearchQuery } from '../../hooks/useSearchString/useSearchString';

function Header({ handleSearch }: HeaderProps) {
  const [searchString, setSearchString] = useSearchQuery();
  const navigate = useNavigate();

  const handleInputChange = (value: string) => {
    setSearchString(value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handleSearch(searchString);
    navigate(`/?search=${encodeURIComponent(searchString.trim())}`);
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
