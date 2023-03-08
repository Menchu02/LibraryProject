import React from "react";
import { Link } from "react-router-dom";
import { FiBookOpen } from "react-icons/fi";
import { ImBin2 } from "react-icons/im"

export default function BookCard({ item, deleteById }) {

const handlerDelete = () => {
  deleteById(item.id)
}

  return (
    <div>
      <Link to={`/books/${item.id}`}>
        <img src={item.coverUrl} alt="Cover Book"></img>
      </Link>
      <FiBookOpen />
      <ImBin2 onClick={handlerDelete}/>

      <p>{item.title}</p>
    </div>
  );
}
