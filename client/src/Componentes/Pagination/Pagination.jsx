import React from "react";
import './Pagination.css'

export default function Pagination({ dogsPerPage, breeds, paginate }) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(breeds.length / dogsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className='pagination'>
            {
                pageNumbers?.map((number, index) => (
                    <button className='btnPage' key={index} onClick={() => paginate(number)}>{number}</button>
                ))
            }
        </div>
    )
};