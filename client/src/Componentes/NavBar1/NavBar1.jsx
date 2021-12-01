import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SearchBar } from "../index";
import styles from "./NavBar1.module.css";
import image from "../../assets/logo.jpg";
import { cleanFilters } from "../../Actions/Index";

export default function NavBar1() {
  const dispatch = useDispatch();

  function handlecleanFilters() {
    dispatch(cleanFilters());
  }
  return (
    <div className={styles.container}>
      <button onClick={()=>handlecleanFilters()} className={styles.containerLogo}>
        <img src={image} alt="logo" className={styles.logo} />
        <div className={styles.textLogo}><p>HenryDogs</p></div>
      </button>
      <SearchBar />
      <Link to={`/createDog`}>
        <button className={styles.btn}>CREATE DOG</button>
      </Link>
    </div>
  );
}
