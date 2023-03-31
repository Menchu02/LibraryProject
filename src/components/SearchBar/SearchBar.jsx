import React from 'react';
import styles from './searchBar.module.css';

export default function SearchBar({ filterBookByName, searchInput }) {
  return (
    <div>
      <input
        type='text'
        placeholder='  Buscador'
        value={searchInput}
        onChange={filterBookByName}
        className={styles.searchInput}
      />
    </div>
  );
}
