import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ value, onChange, onSearch }) => {
  return (
    <div className="search-bar">
      <Input
        value={value}
        onChange={onChange}
        placeholder="Search for activities..."
      />
      <Button onClick={onSearch}>
        <FontAwesomeIcon icon={faSearch} />
      </Button>
    </div>
  );
};

export default SearchBar;