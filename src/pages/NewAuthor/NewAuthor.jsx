import React, { useState } from 'react';
import apiService from '../../apiService/authorService';
import styles from './newAuthor.module.css';
// import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

let authorModel = {
  name: '',
  nacionalidad: '',
};

export default function NewAuthor() {
  const [author, setAuthor] = useState(authorModel);
  //   const navigator = useNavigate();
  const navigator = useNavigate();

  const handleNewAuthor = async (e) => {
    e.preventDefault();

    await apiService.createAuthor(author);
    // navigator('/form/');
    navigator('/books/form/');
    alert('Has añadido un nuevo autor a la lista, acepta para continuar...');
  };

  const handleOnChange = (e) => {
    setAuthor({
      ...author,
      [e.target.name]: e.target.value,
      //todos los atributos, con todos sus valores
    });
  };

  return (
    <>
      <div className={styles.formContainer}>
        <form onSubmit={handleNewAuthor} className={styles.formNewAuthor}>
          <p className={styles.headerForm}>DATOS NUEVO AUTOR</p>
          <input
            className={styles.nameInput}
            onChange={handleOnChange}
            value={author.name}
            type='text'
            name='name'
            placeholder='Nombre '
          />
          <input
            className={styles.nameInput}
            onChange={handleOnChange}
            value={author.nacionalidad}
            type='text'
            name='nacionalidad'
            placeholder='Nacionalidad'
          />
          <button className={styles.buttonAuthor} type='submit'>
            Crear
          </button>
        </form>
      </div>
    </>
  );
  //
}
