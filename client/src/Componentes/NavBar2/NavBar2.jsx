import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar2.module.css";
import image from "../../assets/logo.jpg";

export default function NavBar2() {
  return (
    <div className={styles.container}>
      <Link to={`/home`} className={styles.containerLogo}>
        <img src={image} alt="logo" className={styles.logo} />
        <p className={styles.textLogo}>HenryDogs</p>
      </Link>
      <Link to={`/home`} className={styles.containerLogo}>
        <button className={styles.btn}>HOME</button>
      </Link>
      <Link to={`/createDog`}>
        <button className={styles.btn}>CREATE DOG</button>
      </Link>
    </div>
  );
}
