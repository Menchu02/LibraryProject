import React, { useState } from 'react';
import styles from './form.module.css';
// import { useState } from 'react';
const itemBook = {
  title: '',
  coverUrl:
    'https://drupal.nypl.org/sites-drupal/default/files/blogs/J5LVHEL.jpg',
  isLoaned: false,
  Author: {
    name: '',
    nacionalidad: '',
  },
};

export default function Form() {
  const [newBook, setNewBook] = useState(itemBook);

  return (
    <div className={styles.formContainer}>
      <h2>FORMULARIO:</h2>
      <form className={styles.form}>
        <img
          className={styles.formImg}
          src={newBook.coverUrl}
          alt={newBook.title}
        />
        <label>Portada libro:</label>
        <textarea
          value={newBook.coverUrl}
          //   onChange={handleOnChange}
          className={styles.urlInput}
          type='textarea'
          name='coverUrl'
        />
        <label>Título:</label>
        <input
          value={newBook.title}
          //   onChange={handleOnChange}
          className={styles.nameInput}
          type='text'
          name='title'
        />
        <label>Autor:</label>
        <input
          value={newBook.Author.name}
          //   onChange={handleOnChange}
          className={styles.nameInput}
          type='text'
          name='Author.name'
        />
        <label>Nacionalidad:</label>
        <input
          value={newBook.Author.nacionalidad}
          //   onChange={handleOnChange}
          className={styles.nameInput}
          type='text'
          name='Author.nacionalidad'
        />
        <button>Crear</button>
      </form>
    </div>
  );
}
