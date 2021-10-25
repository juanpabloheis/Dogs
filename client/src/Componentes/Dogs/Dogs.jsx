import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dog, Loading } from "../index";
import styles from "./Dogs.module.css";

export default function Dogs({ breeds }) {
  const [state, setstate] = useState(breeds);

  useEffect(() => {
    setstate(breeds);
  }, [state]);

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
