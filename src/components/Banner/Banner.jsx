import React from 'react';
import styles from './banner.module.css';
import { GiPlainArrow } from 'react-icons/gi';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <h1 className={styles.bannertext}>Bienvenido a tu espacio de trabajo</h1>
      <div className={styles.arrowBannerContainer}>
        <GiPlainArrow className={styles.arrowBanner} />
      </div>
    </div>
  );
}
