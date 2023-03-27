import React, { useEffect, useState } from 'react';
import apiService from '../../apiService/bookService';

import BookCard from '../BookCard/BookCard';
import styles from './bookGalery.module.css';

export default function BookGalery() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    apiService.getAll().then((data) => {
      setBook(data);
    });
  }, []);

  //FUNCIÓN PARA CAMBIAR EL ESTADO DEL ISLOANED:
  const handleIsLoaned = (libro) => {
    let editBook = { ...libro, isLoaned: !libro.isLoaned };

    let newState = book.map((item) => (item.id === libro.id ? editBook : item));

    apiService
      .toggleIsLoaned(libro.id, { isLoaned: !libro.isLoaned })
      .then(() => setBook(newState))

      .catch((error) => console.error(error));

    // bookService
    //   .toggleFavorite(movie.id, { isFavorite: !movie.isFavorite })
    //   .then(() => setMovies(newState))
    //   .catch((error) => console.log(error));
  };

  const deleteById = (idToDelete) => {
    apiService.deleteById(idToDelete);
    let newData = book.filter((item) => item.id !== idToDelete);
    setBook(newData);
  };

  return (
    <div className={styles.containerGallery}>
      {book.map((item) => (
        <BookCard
          handleIsLoaned={handleIsLoaned}
          key={item.id}
          title={item.title}
          item={item}
          deleteById={deleteById}
        />
      ))}
    </div>
  );
}
