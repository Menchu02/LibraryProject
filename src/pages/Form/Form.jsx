import React, { useState } from 'react';
import apiService from '../../apiService/bookService';
import styles from './form.module.css';
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
const itemBook = {
  title: '',
  coverUrl:
    'https://drupal.nypl.org/sites-drupal/default/files/blogs/J5LVHEL.jpg',
  isLoaned: false,
  author: {
    name: '',
    nacionalidad: '',
  },
};

export default function Form() {
  const [newBook, setNewBook] = useState(itemBook);
  const [newAuthor, setNewAuthor] = useState(itemBook.author);
  const navigator = useNavigate();

  const handlerSubmit = async (e) => {
    e.preventDefault();
    await apiService.create(itemBook);
    navigator('/');
  };

  const handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    newBook[name] = value;
    setNewBook({ ...newBook });
  };
  const handlerAuthor = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    newAuthor[name] = value;
    setNewAuthor({ ...newAuthor });
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handlerSubmit} className={styles.form}>
        <img
          className={styles.formImg}
          src={newBook.coverUrl}
          alt={newBook.title}
        />
        <label>Portada libro:</label>
        <textarea
          value={newBook.coverUrl}
          onChange={handleOnChange}
          className={styles.urlInput}
          type='textarea'
          name='coverUrl'
        />
        <label>Título:</label>
        <input
          value={newBook.title}
          onChange={handleOnChange}
          className={styles.nameInput}
          type='text'
          name='title'
        />
        <label>Autor:</label>
        <input
          value={newAuthor.name}
          onChange={handlerAuthor}
          className={styles.nameInput}
          type='text'
          name='name'
        />
        <label>Nacionalidad:</label>
        <input
          value={newAuthor.nacionalidad}
          onChange={handlerAuthor}
          className={styles.nameInput}
          type='text'
          name='nacionalidad'
        />
        <button className={styles.buttonForm} type='submit'>
          Crear
        </button>
      </form>
    </div>
  );
}
