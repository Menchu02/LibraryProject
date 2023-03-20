import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../../apiService/apiService';
// import NavBar from '../../components/NavBar/Navbar';
import styles from './bookDetails.module.css';

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [author, setAuthor] = useState({});
  // console.log(book.Author.name);

  useEffect(() => {
    getBookData();
  }, []);

  let getBookData = () => {
    apiService.getById(id).then((data) => {
      setBook(data);
      setAuthor(data.author);
    });
  };
  console.log(book);
  return (
    <div className={styles.detailContainer}>
      <div className={styles.detail}>
        <img src={book.coverUrl} alt='Cover Book'></img>
        <div className={styles.bookData}>
          <h3>Título: {book.title}</h3>
          <h3>Autor: {author.name}</h3>
          <h3>Nacionalidad: {author.nacionalidad}</h3>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
