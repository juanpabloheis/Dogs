import { useState } from "react";
import { useDispatch } from "react-redux";
import { getBreeds } from "../../Actions/Index";
import { BiSearch } from "react-icons/bi";
import style from "./SearchBar.module.css";

export default function SearchBar() {
  const [breed, setBreed] = useState("");

  const dispatch = useDispatch();

  function handleChange(e) {
    setBreed(e.target.value);
    dispatch(getBreeds(breed));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setBreed("");
  }

  return (
    <form className={style.container} onSubmit={(e) => handleSubmit(e)}>
      <input
        className={style.input}
        type="Search"
        placeholder="Search..."
        value={breed}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">
        <BiSearch />
      </button>
    </form>
  );
}
