import { ChangeEvent } from 'react';
import styles from './SearchInput.module.css';
import { SearchInputProps } from './SearchInput.props';

function SearchInput({ value, onChange }: SearchInputProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      className={styles['input']}
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Start typing to search..."
    />
  );
}

export default SearchInput;
