import React from 'react';
import styles from './navBar.module.css';
import logo from '../../assets/logo.png';

export default function NavBar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.logoContainer}>
        <img className={styles.imgNavBar} src={logo} alt='logo' />
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
