import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDogsPerPage } from "../../Actions/Index";
import styles from "./Pagination.module.css";

export default function Pagination() {
  const { breedsFiltered, page } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(page);
  
  const pageNumbers = [];
  let numberDogsPerPage = 8;
  //Arreglo donde los elementos son el numero de pagina (index)
  const indexLastDog = currentPage * numberDogsPerPage; // Número 'index' del ultimo personaje de la página = página actual * personajes x página
  const indexFirstDog = indexLastDog - numberDogsPerPage; // Número 'index' del primer personaje de la página = index del último personaje de la página - personajes por página
  const dogsPerPage = breedsFiltered.slice(indexFirstDog, indexLastDog);

  useEffect(() => {
    dispatch(setDogsPerPage(dogsPerPage))
  }, [currentPage, breedsFiltered]);

  for (let i = 1; i <= Math.ceil(breedsFiltered.length / numberDogsPerPage); i++) {
    pageNumbers.push(i);
  }

  function paginate(number) {
    setCurrentPage(number);
  }

  return (
    <div className={styles.container}>

      {pageNumbers && currentPage > 1 && (
        <button
          className={styles.button}
          onClick={() => paginate(currentPage-1)}
        >
        {'<'}
        </button>
      )}

      {pageNumbers?.map((number, index) => (
        <button
          className={currentPage === number ? styles.btnselected : styles.button}
          key={index}
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ))}

      {pageNumbers && currentPage <= pageNumbers.length - 1 && (
        <button
          className={styles.button}
          onClick={() => paginate(currentPage+1)}
        >
        {'>'}
        </button>
      )}
    </div>
  );
}
