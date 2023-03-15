import React from 'react';
import { Link } from 'react-router-dom';
import { FiBookOpen } from 'react-icons/fi';
import { ImBin2 } from 'react-icons/im';
import { BsFillPencilFill } from 'react-icons/bs';
import { HiBookOpen } from 'react-icons/hi';

import styles from './bookCard.module.css';

export default function BookCard({ item, deleteById }) {
  const handlerDelete = () => {
    deleteById(item.id);
  };
  // console.log(item.isLoaned);

  return (
    <div className={styles.containerCard}>
      <Link to={`/books/${item.id}`}>
        <img
          className={styles.imgCard}
          src={item.coverUrl}
          alt='Cover Book'
        ></img>
      </Link>

      <div>
        <div className={styles.bottomCard}>
          <h3>{item.title}</h3>
          <div className={styles.linksBottomCard}>
            <HiBookOpen
              //CONDICIONAL CAMBIO COLOR
              className={
                item.isLoaned ? styles.isLoanedActive : styles.isLoaned
              }
            />
            {/* FUNCION ELIMINAR */}
            <ImBin2 className={styles.delete} onClick={handlerDelete} />
            <BsFillPencilFill className={styles.edit} />
          </div>
        </div>
      </div>
    </div>
  );
}
