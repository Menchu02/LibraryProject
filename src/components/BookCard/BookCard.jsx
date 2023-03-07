import React from 'react';

export default function BookCard({ item }) {
  return (
    <div>
      <img src={item.coverUrl} alt='Cover Book'></img>
      <p>{item.title}</p>
    </div>
  );
}
