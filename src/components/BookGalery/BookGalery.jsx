import React, { useEffect, useState } from "react";
import apiService from "../../apiService/apiService";
import BookCard from "../BookCard/BookCard";
import styles from "./bookGalery.module.css";

export default function BookGalery() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    apiService.getAll().then((data) => {
      setBook(
        data.sort((a, b) =>
          a.title > b.title ? 1 : a.title < b.title ? -1 : 0
        )
      );
    });
  }, []);

  const deleteById = (idToDelete) => {
    apiService.deleteById(idToDelete);
    let newData = book.filter((item) => item.id !== idToDelete);
    setBook(newData);
  };

  return (
    <div className={styles.containerGallery}>
      {book.map((item) => (
        <BookCard
          key={item.id}
          title={item.title}
          item={item}
          deleteById={deleteById}
        />
      ))}
    </div>
  );
}
