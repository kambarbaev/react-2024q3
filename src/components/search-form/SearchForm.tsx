import React, { Component } from 'react';
import styles from './SearchForm.module.css';
import SearchInput from '../search-input/SearchInput';
import SearchButton from '../search-button/SearchButton';
import { SearchFormState } from './SearchForm.props';

class SearchForm extends Component<Record<string, never>, SearchFormState> {
  state: SearchFormState = {
    searchString: '',
  };

  handleInputChange = (value: string) => {
    this.setState({ searchString: value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { searchString: searchString } = this.state;

    if (searchString.trim() !== '') {
      localStorage.setItem('searchString', searchString.trim());
    }
  };

  componentDidMount() {
    const savedSearchString = localStorage.getItem('searchString');
    if (savedSearchString) {
      this.setState({ searchString: savedSearchString });
    }
  }

  render() {
    return (
      <form className={styles['form']} onSubmit={this.handleSubmit}>
        <SearchInput value={this.state.searchString} onChange={this.handleInputChange} />
        <SearchButton />
      </form>
    );
  }
}

export default SearchForm;
