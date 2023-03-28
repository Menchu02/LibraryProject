import { async } from 'q';
import React, { useEffect, useState } from 'react';
import apiService from '../../apiService/authorService';
import styles from './newAuthor.module.css';
// import { useNavigate } from 'react-router-dom';

let authorModel = {
  name: '',
  nacionalidad: '',
};

export default function NewAuthor() {
  const [author, setAuthor] = useState(authorModel);
  //   const navigator = useNavigate();

  //   useEffect(() => {
  //     apiService.createAuthor().then((data) => console.log(data));
  //   }, []);

  const handleNewAuthor = async (e) => {
    e.preventDefault();

    await apiService.createAuthor(author);
    // navigator('/form/');
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
      <div>
        <form onSubmit={handleNewAuthor} className={styles.formNewAuthor}>
          <input
            onChange={handleOnChange}
            value={author.name}
            type='text'
            name='name'
            placeholder='Nombre autor'
          />
          <input
            onChange={handleOnChange}
            value={author.nacionalidad}
            type='text'
            name='nacionalidad'
            placeholder='Nacionalidad'
          />
          <button type='submit'>Crear</button>
        </form>
      </div>
    </>
  );
  //
}
