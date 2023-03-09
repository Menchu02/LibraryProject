import { react } from '@babel/types';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookDetail from './pages/BookDetails/BookDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<BookDetail />} path='/books/:id' />
      </Routes>
    </div>
  );
}

export default App;
