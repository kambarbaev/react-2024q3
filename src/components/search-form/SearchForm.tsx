import React from 'react';
import styles from './SearchForm.module.css';
import SearchInput from '../search-input/SearchInput';
import SearchButton from '../search-button/SearchButton';

class SearchForm extends React.Component {
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  render() {
    return (
      <form className={styles['form']} onSubmit={this.handleSubmit}>
        <SearchInput />
        <SearchButton />
      </form>
    );
  }
}

export default SearchForm;
