import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBreeds, getTemperaments } from "../../Actions/Index";
import { Dogs, NavBar, Filters, Pagination, Footer } from "../../Componentes/index";
import styles from "./Home.module.css";

export default function Home() {
  const breedsFiltered = useSelector((state) => state.breedsFiltered);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  let dogsPerPage = 8;
  //Arreglo donde los elementos son el numero de pagina (index)
  const indexLastDog = currentPage * dogsPerPage; // Número 'index' del ultimo personaje de la página = página actual * personajes x página
  const indexFirstDog = indexLastDog - dogsPerPage; // Número 'index' del primer personaje de la página = index del último personaje de la página - personajes por página
  const allDogsPerPage = breedsFiltered.slice(indexFirstDog, indexLastDog);

  useEffect(() => {
    dispatch(getBreeds());
    dispatch(getTemperaments());
  }, []);

  function paginate(number) {
    setCurrentPage(number);
  }

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <NavBar />
      </div>
      <div className={styles.filters}>
        <Filters />
      </div>
      <div className={styles.dogs}>
        <Dogs breeds={allDogsPerPage} />
      </div>
      <div className={styles.pagination}>
        <Pagination
          dogsPerPage={dogsPerPage}
          breeds={breedsFiltered}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div> 
      <div className={styles.footer}>
        <Footer />
      </div>

    </div>
  );
}
