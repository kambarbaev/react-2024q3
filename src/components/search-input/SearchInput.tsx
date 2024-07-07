import { Component, ChangeEvent } from 'react';
import styles from './SearchInput.module.css';
import { SearchInputProps } from './SearchInput.props';

class SearchInput extends Component<SearchInputProps> {
  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <input
        className={styles['input']}
        type="text"
        value={this.props.value}
        onChange={this.handleChange}
        placeholder="Start typing to search..."
      />
    );
  }
}

export default SearchInput;
