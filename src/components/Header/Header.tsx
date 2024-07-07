import { Component } from 'react';
import styles from './Header.module.css';
import { HeaderProps, SearchFormState } from './Header.props';
import { fetchApi } from '../../serviсes/api';
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
    const { searchString: searchString } = this.state;

    if (searchString.trim() !== '') {
      localStorage.setItem('searchString', searchString.trim());
    }

    fetchApi(searchString.trim()).then((data) => {
      this.props.updateSearchData(data.results);
    });
  };

  componentDidMount() {
    const savedSearchString = localStorage.getItem('searchString');

    if (savedSearchString) {
      this.setState({ searchString: savedSearchString });
      fetchApi(savedSearchString).then((data) => {
        this.props.updateSearchData(data.results);
      });
    } else {
      fetchApi('').then((data) => {
        this.props.updateSearchData(data.results);
      });
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
