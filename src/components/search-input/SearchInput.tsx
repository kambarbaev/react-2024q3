import { Component } from 'react';
import styles from './SearchInput.module.css';

class SearchInput extends Component {
  render() {
    return <input className={styles['input']} />;
  }
}

export default SearchInput;
