import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetail, deleteDetail } from "../../Actions/Index";
import { NavBar2, Loading } from "../../Componentes/index";
import styles from "./DogDetail.module.css";

export default function DogDetail(props) {
  const dispatch = useDispatch();
  const breedDetail = useSelector((state) => state.breedDetail);
  const id = props.match.params.id;

  useEffect(() => {
    dispatch(getDetail(id));
    return () => {
      dispatch(deleteDetail());
    };
  }, [id, dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <NavBar2 />
      </div>
      {breedDetail ? (
        <div className={styles.containerDetail} >
          <div className={styles.card}>
            <img
              src={breedDetail.image?.url || breedDetail.image || 'https://fearfuldogs.com/wp-content/uploads/2011/03/questioningdog-285x300.jpg'}
              alt="Not found"
            />
            <h3>{breedDetail.name}</h3>
            <hr className={styles.hr}/>
            <div className={styles.containerPropsDog}>
              <p>{`- Height: ${breedDetail.height?.metric || breedDetail.height} cm`}</p>
              <p>{`- Weight: ${breedDetail.weight?.metric || breedDetail.weight} kg`}</p>
              <p>{`- Life span: ${breedDetail.life_span}`}</p>
              <p>- Temperament: </p>
              <p>{breedDetail.temperament}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.containerLoading}>
          <Loading />
        </div>
      )}
    </div>
  );
}
