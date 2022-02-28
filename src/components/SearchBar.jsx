import React from "react";
import styles from "./styles/SearchBar.module.css";
import { IoSearch } from "react-icons/io5";

export default function SearchBar({ onSearch }) {
  function handleOnSearch(event) {
    event.preventDefault();
    if (typeof onSearch === "function") {
      const input = document.getElementById("search-bar-input");
      onSearch(input.value);
      input.value = "";
    }
  }

  return (
    <form className={styles.searchBar} onSubmit={handleOnSearch}>
      <input
        placeholder="Add city..."
        id="search-bar-input"
        autoComplete="off"
      ></input>
      <button type="submit">
        <IoSearch />
      </button>
    </form>
  );
}
