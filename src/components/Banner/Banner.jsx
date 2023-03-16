import React from 'react';
import styles from './banner.module.css';

export default function Banner() {
  return (
    <div className={styles.banner}>
      {/* <div className='banner-container'> */}
      <h1 className={styles.bannertext}>Bienvenido a tu espacio de trabajo</h1>
      {/* </div> */}
    </div>
  );
}
