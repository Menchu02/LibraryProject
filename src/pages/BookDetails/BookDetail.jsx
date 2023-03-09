import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../../apiService/apiService';

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    apiService.getById(id).then((res) => setBook(res));
  }, [id]);

  return (
    <div>
      <img src={book.coverUrl} alt='Cover Book'></img>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
    </div>
  );
}

export default BookDetail;
