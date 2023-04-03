import React, { useEffect, useState } from 'react';
import apiService from '../../apiService/bookService';
import styles from './form.module.css';
import { useNavigate } from 'react-router-dom';
import authorService from '../../apiService/authorService';
import { Link } from 'react-router-dom';

const itemBook = {
  title: '',
  coverUrl:
    'https://drupal.nypl.org/sites-drupal/default/files/blogs/J5LVHEL.jpg',
  isLoaned: false,
  authorId: '',
};
const authorModel = {
  name: '',
  id: '1',
};

export default function Form() {
  const [newBook, setNewBook] = useState(itemBook);
  const [newAuthor, setNewAuthor] = useState([authorModel]);
  const navigator = useNavigate();

  useEffect(() => {
    authorService.getAllAuthors().then((data) => setNewAuthor(data));
  }, []);

  const handlerSubmit = async (e) => {
    e.preventDefault();

    await apiService.create(newBook);
    navigator('/');
  };

  const handleOnChange = (e) => {
    setNewBook({
      ...newBook,

      [e.target.name]: e.target.value,

      // coverUrl: e.target.value,
      // isLoaned: e.target.value,
    });
  };
  const handlerAuthor = (e) => {
    const id = e.target.value;

    setNewBook({ ...newBook, authorId: id });
  };
  console.log(newBook);
  return (
    <div className={styles.formContainer}>
      <form onSubmit={handlerSubmit} className={styles.form}>
        <img
          className={styles.formImg}
          src={newBook.coverUrl}
          alt={newBook.title}
        />

        <textarea
          value={newBook.coverUrl}
          onChange={handleOnChange}
          className={styles.urlInput}
          type='textarea'
          name='coverUrl'
          placeholder='Añade imagen'
        />

        <input
          value={newBook.title}
          onChange={handleOnChange}
          className={styles.nameInput}
          type='text'
          name='title'
          placeholder='Añade título'
        />
        <div className={styles.buttonsAuthor}>
          <select
            className={styles.selectInput}
            name='authors'
            id='authors'
            onChange={handlerAuthor}
          >
            {newAuthor.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <Link className={styles.anchorAuthor} to={'/books/newAuthors/'}>
            Añadir autor
          </Link>

          {/* <a
            className={styles.anchorAuthor}
            href='http://localhost:3000/books/newAuthors/'
          >
            Añadir autor
          </a> */}
        </div>

        <button className={styles.buttonForm} type='submit'>
          Añadir libro
        </button>
      </form>
    </div>
  );
}
