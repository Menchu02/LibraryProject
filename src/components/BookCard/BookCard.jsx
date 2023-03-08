import React from "react";
import { Link } from "react-router-dom";
import { FiBookOpen } from "react-icons/fi";

export default function BookCard({ item }) {
  return (
    <div>
      <Link to={`/books/${item.id}`}>
        <img src={item.coverUrl} alt="Cover Book"></img>
      </Link>
      <FiBookOpen />

      <p>{item.title}</p>
    </div>
  );
}
