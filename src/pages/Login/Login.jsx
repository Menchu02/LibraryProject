import React from "react";
import styles from "./login.module.css";
import { useState } from "react";

const itemUser = {
  user: "",
  mail: "",
  password: "",
};

const Login = () => {
  const [user, setUser] = useState(itemUser);

  const handlerSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("login", `${user.user}`);
  };

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handlerSubmit} className={styles.form}>
        <h1>Login</h1>
        <input
          onChange={handleOnChange}
          type="text"
          name="user"
          placeholder="Nombre"
        />
        <input type="text" name="mail" placeholder="correo electrónico" />
        <input type="text" name="password" placeholder="contraseña" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
