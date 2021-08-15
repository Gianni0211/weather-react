import React, { useState } from "react";
import "./SearchBar.css";
import axios from "axios";
import apiKey from "../../consts/autocompleteKey";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchButton from "./SearchButton/SearchButton";

const SearchBar = (props) => {
  const autoCompleteUrl = `https://autocomplete.search.hereapi.com/v1/autocomplete`;
  const config = {
    Authorization: `Bearer[${apiKey}]`,
  };
  const [inputText, setInputText] = useState("");
  const onChangeHandler = async (e) => {
    let text = e.target.value;
    setInputText(text);
    if (inputText.length >= 3) {
      await axios
        .get(`${autoCompleteUrl}?q=${inputText}&apiKey=${apiKey}`)
        .then((response) => {
          console.log(response.data.items);
        });
    }
  };
  return (
    <form className="search-bar">
      <span className="search-icon">
        <FontAwesomeIcon icon={faSearch} />
      </span>

      <input
        className="search-input"
        type="text"
        placeholder="Search for places..."
        onChange={onChangeHandler}
      />
      <SearchButton />
    </form>
  );
};

export default SearchBar;
