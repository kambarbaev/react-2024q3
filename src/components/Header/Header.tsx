import { Component } from 'react';
import styles from './Header.module.css';
import { HeaderProps, SearchFormState } from './Header.props';
import { Button, SearchInput } from '..';

class Header extends Component<HeaderProps, SearchFormState> {
  state: SearchFormState = {
    searchString: '',
    error: false,
  };

  handleInputChange = (value: string) => {
    this.setState({ searchString: value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { searchString } = this.state;

    localStorage.setItem('searchString', searchString.trim());

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

  throwError = () => {
    this.setState({ error: true });
  };

  render() {
    if (this.state.error) {
      throw new Error('Ops! Something went wrong!');
    }

    return (
      <header className={styles['header']}>
        <div className={styles['logotype']}>
          <img src="/logotype-yellow.png" />
        </div>
        <form className={styles['form']} onSubmit={this.handleSubmit}>
          <SearchInput value={this.state.searchString} onChange={this.handleInputChange} />
          <Button className={styles['search-button']} text="Search" />
        </form>
        <Button className={styles['error-button']} onClick={this.throwError} text="Throw error" />
      </header>
    );
  }
}

export default Header;
