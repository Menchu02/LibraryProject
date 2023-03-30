import React from 'react';
import styles from './searchBar.module.css';

export default function SearchBar({ filterBookByName, searchInput }) {
  return (
    <div>
      <input
        value={searchInput}
        onChange={filterBookByName}
        className={styles.searchInput}
      />
    </div>
  );
}
