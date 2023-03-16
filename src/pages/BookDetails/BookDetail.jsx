import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../../apiService/apiService';
import NavBar from '../../components/NavBar/Navbar';
import styles from './bookDetails.module.css';

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState({});
  // console.log(book.Author.name);

  useEffect(() => {
    apiService.getById(id).then((res) => setBook(res));
  }, [id]);

  return (
    <div className={styles.detailContainer}>
      <div className={styles.detail}>
        <img src={book.coverUrl} alt='Cover Book'></img>
        <div className={styles.bookData}>
          <h3>Título:{book.title}</h3>
          <h3>Autor:{book.title}</h3>
          <h3>Nacionalidad:{book.title}</h3>
        </div>
      </div>

      {/* <p>{book.Author}</p> */}
    </div>
  );
}

export default BookDetail;
