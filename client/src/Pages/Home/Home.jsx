import React from "react";
import { Dogs, NavBar1, Filters, Pagination, Footer } from "../../Componentes/index";
import styles from "./Home.module.css";

export default function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <NavBar1 />
      </div>
      <div className={styles.filters}>
        <Filters />
      </div>
      <div className={styles.dogs}>
        <Dogs />
      </div>
      <div className={styles.pagination}>
        <Pagination />
      </div> 
      <div className={styles.footer}>
        <Footer />
      </div>

    </div>
  );
}
