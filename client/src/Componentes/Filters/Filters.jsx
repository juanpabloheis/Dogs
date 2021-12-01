import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterBy,
  orderBy,
  cleanFilters,
  getTemperaments,
} from "../../Actions/Index";
import styles from "./Filters.module.css";

export default function Filters() {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

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
      <div className={styles.containerFilters1}>
        <div className={styles.containerFilters2}>
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
              <option value="API">This site</option>
              <option value="Created by User">Users</option>
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

          <button className={styles.btn} onClick={() => handlecleanFilters()}>
            Reset
          </button>
        </div>
      </div>

      {/* <div className={styles.btnOpenFilters}> */}
        <button className={styles.btnOpenFilters} onClick={() => setOpen(!open)}>Filters</button>
      {/* </div> */}
      {open && (
        <div className={styles.containerSideBar}>
          <button className={styles.btnCloseFilters} onClick={() => setOpen(!open)}>X</button>

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
              <option value="API">This site</option>
              <option value="Created by User">Users</option>
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

          <button className={styles.btn} onClick={() => handlecleanFilters()}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
