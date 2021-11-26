import React from "react";
import styles from "./Pagination.module.css";

export default function Pagination({ dogsPerPage, breeds, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(breeds.length / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.container}>

      {pageNumbers && currentPage > 1 && (
        <button
          className={styles.button}
          onClick={() => paginate(currentPage - 1)}
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
          onClick={() => paginate(currentPage + 1)}
        >
        {'>'}
        </button>
      )}
    </div>
  );
}
