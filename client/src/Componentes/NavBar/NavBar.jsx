import React from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../../Componentes/index";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <Link to={`/home`}>
        <img src="" />
        <button className={styles.btn}>HOME</button>
      </Link>
      <SearchBar />
      <Link to={`/createDog`}>
        <button className={styles.btn}>CREATE DOG</button>
      </Link>
    </div>
  );
}
