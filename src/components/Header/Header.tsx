import { Component } from 'react';
import styles from './Header.module.css';
import { HeaderProps, SearchFormState } from './Header.props';
import { SearchButton, SearchInput } from '..';

class Header extends Component<HeaderProps, SearchFormState> {
  state: SearchFormState = {
    searchString: '',
  };

  handleInputChange = (value: string) => {
    this.setState({ searchString: value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { searchString } = this.state;

    if (searchString.trim() !== '') {
      localStorage.setItem('searchString', searchString.trim());
    }

    this.props.handleSearch(searchString.trim());
  };

  componentDidMount() {
    const savedSearchString = localStorage.getItem('searchString');
    if (savedSearchString) {
      this.setState({ searchString: savedSearchString });
      this.props.handleSearch(savedSearchString.trim());
    } else {
      this.props.handleSearch('');
    }
  }

  render() {
    return (
      <header className={styles['header']}>
        <form className={styles['form']} onSubmit={this.handleSubmit}>
          <SearchInput value={this.state.searchString} onChange={this.handleInputChange} />
          <SearchButton />
        </form>
      </header>
    );
  }
}

export default Header;
