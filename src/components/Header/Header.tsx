import React from 'react';
import styles from './Header.module.css';
import SearchForm from '../search-form/SearchForm';

class Header extends React.Component {
  render() {
    return (
      <header className={styles['header']}>
        <SearchForm />
      </header>
    );
  }
}

export default Header;
