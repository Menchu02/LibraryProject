import { react } from '@babel/types';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookDetail from './pages/BookDetails/BookDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/Navbar';
import Form from './pages/BookDetails/Form/Form';

function App() {
  return (
    <div className='App'>
      <NavBar />

      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<BookDetail />} path='/books/:id' />
        <Route element={<Form />} path='books/form/' />
      </Routes>
    </div>
  );
}

export default App;
