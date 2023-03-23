import React, { useEffect, useState } from 'react';
import apiService from '../../apiService/bookService';
import BookCard from '../../components/BookCard/BookCard';
import styles from './disponible.module.css';

export default function Disponibles() {
  const [available, setAvailable] = useState([]);

  useEffect(() => {
    apiService.getIsNotLoaned().then((data) => setAvailable(data));
  }, []);

  return (
    <div className={styles.availableContainer}>
      {available.map((item) => (
        <BookCard key={item.id} item={item} />
      ))}
    </div>
  );
}
