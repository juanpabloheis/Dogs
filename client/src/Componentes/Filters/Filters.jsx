import { useDispatch, useSelector } from "react-redux";
import { filterBy, orderBy } from "../../Actions/Index";
import styles from "./Filters.module.css";

export default function Filters() {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);

  function handleChangeFilter(e) {
    console.log("e.target.value", e.target.value);
    dispatch(filterBy(e.target.value));
  }

  function handleChangeOrder(e) {
    dispatch(orderBy(e.target.value));
  }

  return (
    <div className={styles.container}>
      <div className={styles.divFilter}>
        <label>Filter by: </label>
        <div className={styles.containerFilter}>
          <div>
            {/* <label>Temperaments: </label> */}
            <select
              className={styles.inputFilter}
              onChange={handleChangeFilter}
            >
              <option value="Temperaments">Temperaments</option>
              {temperaments?.map((temp, index) => {
                return (
                  <option value={temp} key={index}>
                    {temp}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            {/* <label>Origin: </label> */}
            <select
              className={styles.inputFilter}
              onChange={handleChangeFilter}
            >
              {/* <option>Origin: </option> */}
              <option value="Origin">Origin</option>
              <option value="API">API</option>
              <option value="Created by User">Created by User</option>
            </select>
          </div>
        </div>
      </div>

      <div className={styles.divFilter}>
        <label>Order by: </label>
        <div className={styles.containerFilter}>
          <div>
            <label>ABC: </label>
            <select className={styles.inputFilter} onChange={handleChangeOrder}>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
          </div>

          <div>
            <label>Weight: </label>
            <select className={styles.inputFilter} onChange={handleChangeOrder}>
              <option value="- a +">- a +</option>
              <option value="+ a -">+ a -</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
