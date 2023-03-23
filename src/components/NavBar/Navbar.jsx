import React from 'react';
import styles from './navBar.module.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.logoContainer}>
        <img className={styles.imgNavBar} src={logo} alt='logo' />
        <h1>Library</h1>
      </div>
      <div className={styles.linkContainer}>
        <ul className={styles.ulContainer}>
          <Link className={styles.links} to={'/'}>
            <li>Home</li>
          </Link>
          <Link className={styles.links} to={'books/form/'}>
            <li>Crear</li>
          </Link>
          <Link className={styles.links} to={'books/disponibles'}>
            <li>Disponibles</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
