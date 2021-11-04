import React from "react";
import styles from "./Pagination.module.css";

export default function Pagination({ dogsPerPage, breeds, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(breeds.length / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.container}>
      {pageNumbers?.map((number, index) => (
        <button
          key={index}
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
}
