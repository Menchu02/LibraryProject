import React from 'react';
import styles from './navBar.module.css';

export default function NavBar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.logoContainer}>
        <h1>Library</h1>
      </div>
      <div className={styles.linkContainer}>
        <ul className={styles.ulContainer}>
          <li>Home</li>
          <li>Crear</li>
        </ul>
      </div>
    </div>
  );
}
