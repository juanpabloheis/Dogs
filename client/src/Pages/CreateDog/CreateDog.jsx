import React, { useState, useEffect } from "react";
import { addDog } from "../../Actions/Index";
import { useSelector, useDispatch } from "react-redux";
import styles from "./CreateDog.module.css";
import { getTemperaments } from "../../Actions/Index";
import { NavBar } from "../../Componentes/index";
import { validate } from "./validate";

export default function FormDog() {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);
  const [input, setInput] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    image: "",
    temperaments: [],
  });

  const [error, setError] = useState("");

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  function handleChange(e) {
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  const handleTempChange = (e) => {
    if (input.temperaments.includes(e.target.value)) {
      return alert(
        "You have already selected that temperament, plase select another one."
      );
    }
    setInput((prev) => ({
      ...prev,
      temperaments: [...prev.temperaments, e.target.value],
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addDog(input));
    alert("The dog was successfully created");
    setInput({
      name: "",
      height: "",
      weight: "",
      life_span: "",
      image: "",
      temperaments: [],
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <NavBar />
      </div>
      <div className={styles.containerDetail}>
        <form className={styles.card} onSubmit={(e) => handleSubmit(e)}>
          <label>Create your dog! </label>
          <br />
          <div className={styles.divContainer}>
            <label>Name* </label>
            <input
              className={error.name ? styles.inputDanger : styles.input}
              type="text"
              name="name"
              value={input.name}
              required
              onChange={(e) => handleChange(e)}
            />
            {error.name ? <p className={styles.danger}>{error.name}</p> : ""}
          </div>

          <div className={styles.divContainer}>
            <label>Height* </label>
            <input
              className={styles.input}
              type="text"
              name="height"
              value={input.height}
              required
              placeholder="min - max"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className={styles.divContainer}>
            <label>Weight* </label>
            <input
              className={styles.input}
              type="text"
              name="weight"
              value={input.weight}
              required
              placeholder="min - max"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className={styles.divContainer}>
            <label>Life span* </label>
            <input
              className={styles.input}
              type="text"
              name="life_span"
              value={input.life_span}
              required
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className={styles.divContainer}>
            <label>Image </label>
            <input
              className={styles.input}
              type="text"
              name="image"
              value={input.image}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className={styles.divContainer}>
            <label>Temperament* </label>
            <select
              className={styles.input}
              onChange={(e) => handleTempChange(e)}
            >
              <option className={styles.input}>Select temperament</option>
              {temperaments?.map((temp, index) => {
                return (
                  <option name="temperaments" value={temp} key={index}>
                    {temp}
                  </option>
                );
              })}
            </select>
            <ul>
              <label>{input.temperaments.map((i) => i + ", ")}</label>
            </ul>
          </div>
          <div className={styles.divContainer}>
            <input type="submit" className={styles.submit} />
          </div>
        </form>
      </div>
    </div>
  );
}

/* return (
  <div className={styles.container}>
    <div className={styles.navbar}>
      <NavBar />
    </div>
    <div className={styles.containerDetail}>
      <form className={styles.card} onSubmit={(e) => handleSubmit(e)}>
        <label>Create your dog! </label>

        {Object.keys(input).map((key) => {
          return (
            key !== "temperaments" && (
              <div className={styles.form}>
                <label key={key}>{key}</label>
                <input
                  className={styles.input}
                  key={key}
                  type="text"
                  name={key}
                  value={input[key]}
                  placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            )
          );
        })}

        <label>Temperament* </label>
        <select className={styles.input} onChange={(e) => handleTempChange(e)}>
          <option>Select temperament</option>
          {temperaments?.map((temp, index) => {
            return (
              <option name="temperaments" value={temp} key={index}>
                {temp}
              </option>
            );
          })}
        </select>
        <ul>
          <label>{input.temperaments.map((i) => i + ", ")}</label>
        </ul>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  </div>
); */
