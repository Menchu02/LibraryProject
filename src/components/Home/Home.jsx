import React from 'react';
import Banner from '../Banner/Banner';

import BookGalery from '../BookGalery/BookGalery';
import NavBar from '../NavBar/Navbar';

export default function Home() {
  return (
    <div>
      <NavBar />
      <Banner />
      <BookGalery />
    </div>
  );
}
