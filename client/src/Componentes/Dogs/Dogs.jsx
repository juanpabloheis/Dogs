import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Dog, Loading } from "../index";
import { getBreeds } from "../../Actions/Index";
import styles from "./Dogs.module.css";

export default function Dogs() {
  const dispatch = useDispatch();
  const breeds = useSelector(state => state.dogsPerPage)
  
  useEffect(() => {
    dispatch(getBreeds());
  }, []);

  return (
    <div className={styles.container} >
      {breeds.length 
      ? <div className={styles.containerDogs}>
      
        {breeds.map((dog) => {
          return (
            <Link key={dog.id} to={`/detail/${dog.id}`} className={styles.link}>
              <Dog
                name={dog.name.toUpperCase()}
                image={dog?.image?.url}
                temperament={dog.temperament}
                key={dog.id}
              />
            </Link>
          );
        })}
       
      </div>  
      : <Loading />
      }
    </div>
  );
}
