import React from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../../Componentes/index";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.container_navBar}>
      <Link to={`/home`}>
        <img src="" />
        <button className={styles.Linkbtn_NavBar}>HOME</button>
      </Link>
      <SearchBar />
      <Link to={`/createDog`}>
        <button className={styles.btn_NavBar}>CREATE DOG</button>
      </Link>
    </div>
  );
}
