import { Component } from 'react';
import styles from './SearchButton.module.css';

class SearchButton extends Component {
  render() {
    return <button className={styles['button']}>Search</button>;
  }
}

export default SearchButton;
