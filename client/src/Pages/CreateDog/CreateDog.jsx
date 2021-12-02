import React, { useState, useEffect } from "react";
import { addDog } from "../../Actions/Index";
import { useSelector, useDispatch } from "react-redux";
import styles from "./CreateDog.module.css";
import { getTemperaments } from "../../Actions/Index";
import { NavBar2 } from "../../Componentes/index";
import { validate } from "./validate";

export default function FormDog() {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);
  const [input, setInput] = useState({
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    minLifeSpan: "",
    maxLifeSpan: "",
    image: undefined,
    temperament: [],
  });

  const [error, setError] = useState("");

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  function handleChange(e) {
    setError(
      validate(
        e.target.name === "temperament" 
        ? {...input, [e.target.name]: [...input.temperament, e.target.value] }
        : {...input, [e.target.name]: e.target.value}
      )
    );

    if(!error.temperament && e.target.name === "temperament"){
      //Con Set eliminamos los temperamentos repetidos
      setInput({...input, [e.target.name]: [...new Set([...input.temperament, e.target.value])]});
    } else if (!error.temperament) {
      setInput({...input, [e.target.name]: e.target.value}
      )
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if(!Object.keys(error).length ){
      dispatch(addDog({
        name: input.name,
        height: `${input.minHeight} - ${input.maxHeight}`,
        weight: `${input.minWeight} - ${input.maxWeight}`,
        life_span: `${input.minLifeSpan} - ${input.maxLifeSpan} years`,
        image: input.image,
        temperament: input.temperament
      }));

      setInput({  
        name: "",
        minHeight: "",
        maxHeight: "",
        minWeight: "",
        maxWeight: "",
        minLifeSpan: "",
        maxLifeSpan: "",
        image: "",
        temperament: [],
      });
      alert("The dog was successfully created");
    }
  }

  function handleDelete(t) {
    setInput({
        ...input,
        temperament: input.temperament.filter(e => e !== t)
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <NavBar2 />
      </div>
      <div className={styles.containerDetail}>
        <form className={styles.card} onSubmit={(e) => handleSubmit(e)}>
          <label className={styles.title}>Create your dog! </label>
          <br />
          <div className={styles.divContainer}>
            <label>Name* </label>
            <input
              className={error.name ? styles.inputDanger : styles.input}
              type="text"
              name="name"
              value={input.name}
/*               required */
              onChange={(e) => handleChange(e)}
            />
            { error.name && <p className={styles.danger}>{ error.name }</p> }
          </div>

          <div className={styles.divContainer}>
            <label>Height* (cm) </label>
            <div className={error.height ? styles.inputDanger2 : styles.inputContainer}>
              <input
                className={styles.input2}
                type="text"
                name="minHeight"
                value={input.minHeight}
                required
                placeholder="Min"
                onChange={(e) => handleChange(e)}
              /> |
               <input
                className={styles.input2}
                type="text"
                name="maxHeight"
                value={input.maxHeight}
                required
                placeholder="Max"
                onChange={(e) => handleChange(e)}
              />  
            </div>
            { error.height && <p className={styles.danger}>{ error.height }</p> }
          </div>

          <div className={styles.divContainer}>
            <label>Weight* (Kg)</label>
            <div className={styles.inputContainer}>
              <input
                className={styles.input2}
                type="text"
                name="minWeight"
                value={input.minWeight}
                required
                placeholder="Min"
                onChange={(e) => handleChange(e)}
              /> |
               <input
                className={styles.input2}
                type="text"
                name="maxWeight"
                value={input.maxWeight}
                required
                placeholder="Max"
                onChange={(e) => handleChange(e)}
              />  
            </div>
            { error.weight && <p className={styles.danger}>{ error.weight }</p> }
          </div>

          <div className={styles.divContainer}>
            <label>Life span* </label>
            <div className={styles.inputContainer}>
              <input
                className={styles.input2}
                type="text"
                name="minLifeSpan"
                value={input.minLifeSpan}
                required
                placeholder="Min"
                onChange={(e) => handleChange(e)}
              /> |
               <input
                className={styles.input2}
                type="text"
                name="maxLifeSpan"
                value={input.maxLifeSpan}
                required
                placeholder="Max"
                onChange={(e) => handleChange(e)}
              />  
            </div>
            { error.lifeSpan && <p className={styles.danger}>{ error.lifeSpan }</p> }
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
              onChange={(e) => handleChange(e)}
              name="temperament"
            >
              <option className={styles.input} >Select temperament</option>
              {temperaments?.map((temp, index) => {
                return (
                  <option name="temperament" value={input.temp} key={index}>
                    {temp}
                  </option>
                );
              })}
            </select>

            { error.temperament && <p className={styles.danger}>{ error.temperament }</p> }
            <div className={styles.temperamentsContainer}>
              {input.temperament.map((t, key) => 
                <div className={styles.tempList} key={key}>
                  <p className={styles.tempItem}>{t}</p>
                  <button className={styles.buttonX} onClick={(() => handleDelete(t))}>X</button>
                </div>
              )}
            </div>

          </div>
          <div className={styles.divContainer}>
            <input type="submit" className={styles.submit} />
          </div>
        </form>
      </div>
    </div>
  );
}