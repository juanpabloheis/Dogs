import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterBy, orderBy, cleanFilters, getTemperaments } from "../../Actions/Index";
import styles from "./Filters.module.css";

export default function Filters() {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);

  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  function handleChangeFilter(e) {
    dispatch(filterBy(e.target.value));
  }

  function handleChangeOrder(e) {
    dispatch(orderBy(e.target.value));
  }

  function handlecleanFilters() {
    dispatch(cleanFilters());
  }

  return (
    <div className={styles.container}>
      <label>Filter by: </label>

      <br />

      <label>Temperaments:</label>
      <select className={styles.select} onChange={handleChangeFilter}>
        {temperaments?.map((temp, index) => {
          return (
            <option value={temp} key={index}>
              {temp}
            </option>
          );
        })}
      </select>
      

      <br />

      <label>Created by: </label>
      <div className={styles.select}>
        <select className={styles.select} onChange={handleChangeFilter}>
          <option value="API">API</option>
          <option value="Created by User">Created by User</option>
        </select>
        {/*<label><input type="checkbox" value="API" />API</label>
          <label><input type="checkbox" value="Created by User"/>Created by User</label> */}
      </div>

      <br />
      <br />

      <label>Order by: </label>

      <br />

      <label>ABC: </label>
      <select className={styles.select} onChange={handleChangeOrder}>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>

      <br />

      <label>Weight: </label>
      <select className={styles.select} onChange={handleChangeOrder}>
        <option value="- a +">- a +</option>
        <option value="+ a -">+ a -</option>
      </select>

      <br />

      <button className={styles.btn} onClick={() => handlecleanFilters()}>Reset</button>
    </div>
  );
}
