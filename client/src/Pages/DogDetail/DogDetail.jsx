import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetail } from "../../Actions/Index";
import { NavBar } from "../../Componentes/index";
import "./DogDetail.css";

export default function DogDetail(props) {
  const dispatch = useDispatch();
  const breedDetail = useSelector((state) => state.breedDetail);
  const id = props.match.params.id;

  useEffect(() => {
    dispatch(getDetail(id));
  }, [id, dispatch]);

  return (
    <div className="containerDetail">
      <NavBar />
      {breedDetail ? (
        <div className="divDetail">
          <img
            className="image"
            src={breedDetail?.image?.url}
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
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
