import { react } from "@babel/types";
import "./App.css";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import BookDetail from "./pages/BookDetails/BookDetail";
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/Navbar";
import Form from "./pages/Form/Form";
import Disponibles from "./pages/Disponibles/Disponibles";
import NewAuthor from "./pages/NewAuthor/NewAuthor";
import Login from "./pages/Login/Login";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<BookDetail />} path="/books/:id" />
        <Route element={<Form />} path="books/form/" />
        <Route element={<Disponibles />} path="books/disponibles/" />
        <Route element={<NewAuthor />} path="books/newAuthors/" />
        <Route element={<Login />} path="books/login/" />
      </Routes>
    </div>
  );
}

export default App;
