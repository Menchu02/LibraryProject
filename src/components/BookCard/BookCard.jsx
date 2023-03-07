import React from "react";
import { Link } from "react-router-dom";

export default function BookCard({ item }) {
  return (
    <div>
      <Link to={`/books/${item.id}`}>
        <img src={item.coverUrl} alt="Cover Book"></img>
      </Link>

      <p>{item.title}</p>
    </div>
  );
}
