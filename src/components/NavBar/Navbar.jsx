import React from 'react';
import styles from './navBar.module.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaRegUser, FaUserSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  let navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('login');
    navigate('/');
  };

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
          <Link to={'books/login/'}>
            <FaRegUser />
          </Link>
          <FaUserSlash onClick={handleLogOut} />
        </ul>
      </div>
    </div>
  );
}
