import React from 'react';
import { Link } from 'react-router-dom';
import { FiBookOpen } from 'react-icons/fi';
import { ImBin2 } from 'react-icons/im';
import { BsFillPencilFill } from 'react-icons/bs';
import styles from './bookCard.module.css';

export default function BookCard({ item, deleteById }) {
  const handlerDelete = () => {
    deleteById(item.id);
  };

  return (
    <div>
      <Link to={`/books/${item.id}`}>
        <img src={item.coverUrl} alt='Cover Book'></img>
      </Link>
      <FiBookOpen className={item.isLoaned ? styles.isLoanedActive : ''} />
      <ImBin2 onClick={handlerDelete} />
      <BsFillPencilFill />

      <h3 className={styles.h3}>{item.title}</h3>
      <h3>{item.author}</h3>
    </div>
  );
}
