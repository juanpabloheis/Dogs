import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetail, deleteDetail } from "../../Actions/Index";
import { NavBar, Loading } from "../../Componentes/index";
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
      <NavBar />
      {breedDetail ? (
        <div className={styles.containerDetail}>
          <div className={styles.card}>
            <img
              className="image"
              src={breedDetail?.image ? breedDetail.image.url : <Loading/>}
              alt="Not found"
            />
            <h3>{breedDetail.name}</h3>
            <h4>
              Height:{" "}
              {breedDetail.height?.metric
                ? breedDetail.height.metric
                : breedDetail.height}{" "}
              cm
            </h4>
            <h4>
              Weight:{" "}
              {breedDetail.weight?.metric
                ? breedDetail.weight.metric
                : breedDetail.weight}{" "}
              kg
            </h4>
            <h4>Life span: {breedDetail.life_span}</h4>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
