import React from "react";
import styles from "./login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const itemUser = {
  user: "",
  mail: "",
  password: "",
};

const Login = () => {
  const [user, setUser] = useState(itemUser);
  let navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("login", `${user.user}`);
    navigate("/books/form/");
  };

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.form}>
        <h1>Login</h1>
        <input
          onChange={handleOnChange}
          type="text"
          name="user"
          placeholder="Nombre"
        />
        <input type="text" name="mail" placeholder="correo electrónico" />
        <input type="text" name="password" placeholder="contraseña" />
        <button onClick={handlerSubmit}>Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
