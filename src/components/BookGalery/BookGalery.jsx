import React, { useEffect, useState } from 'react';
import apiService from '../../apiService/bookService';

import BookCard from '../BookCard/BookCard';
import SearchBar from '../SearchBar/SearchBar';
import styles from './bookGalery.module.css';

export default function BookGalery() {
  const [book, setBook] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [itemBook, setItemBook] = useState([]);

  useEffect(() => {
    getBooksSate();
  }, []);

  const getBooksSate = () => {
    apiService.getAll().then((data) => {
      setItemBook(data);
      setBook([...data]);
    });
  };

  //FUNCIÓN FILTRAR POR NOMBRE
  const filterBookByName = (e) => {
    setSearchInput(e.target.value);
    setBook(
      itemBook.filter((item) =>
        item.title.toUpperCase().includes(e.target.value.toUpperCase())
      )
    );
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
