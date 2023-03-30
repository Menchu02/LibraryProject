import React, { useEffect, useState } from 'react';
import apiService from '../../apiService/bookService';

import BookCard from '../BookCard/BookCard';
import SearchBar from '../SearchBar/SearchBar';
import styles from './bookGalery.module.css';

export default function BookGalery() {
  const [book, setBook] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    apiService.getAll(searchInput).then((data) => {
      setBook(data);
    });
  }, [searchInput]);

  //FUNCIÓN FILTRAR POR NOMBRE
  const filterBookByName = (e) => {
    let title = e.target.value;
    console.log(title);
    setSearchInput(title);
  };

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
    <div className={styles.container_search_gallery}>
      <div className={styles.searchContainer}>
        <SearchBar
          filterBookByName={filterBookByName}
          searchInput={searchInput}
        />
      </div>
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
    </div>
  );
}
