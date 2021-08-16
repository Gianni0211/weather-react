import React, { useState } from "react";
import "./SearchBar.css";
import axios from "axios";
import apiKey from "../../consts/autocompleteKey";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import SearchButton from "./SearchButton/SearchButton";
import AutoCompleteItem from "./AutocompleteItem/AutoCompleteItem";

const SearchBar = (props) => {
  const [inputText, setInputText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const autoCompleteUrl = `https://autocomplete.search.hereapi.com/v1/autocomplete`;
  const autoCompleteHandleClick = (text) => {
    let selectedText = text.target.textContent;
    setInputText(selectedText);
    setSuggestions([]);
  };

  const clearInput = (e) => {
    e.preventDefault();
    setInputText("");
    resetSuggestions();
  };

  const onChangeHandler = async (e) => {
    let text = e.target.value;
    setInputText(text);

    if (inputText.length >= 2) {
      await axios
        .get(`${autoCompleteUrl}?q=${inputText}&apiKey=${apiKey}`)
        .then((response) => {
          setSuggestions(response.data.items);
        });
    } else {
      setSuggestions([]);
    }
  };
  const resetSuggestions = () => {
    setSuggestions([]);
  };
  return (
    <div>
      <form className="search-bar">
        {/* <span className="search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </span> */}
        <SearchButton bg={"white-bg"} icon={faSearch} />

        <input
          className="search-input"
          type="text"
          placeholder="Search for places..."
          value={inputText}
          onChange={onChangeHandler}
        />
        <SearchButton
          bg={"gray-bg"}
          icon={faTimes}
          btnClikcHandler={clearInput}
        />
      </form>
      <div className="suggestions-container">
        {suggestions.length === 0
          ? ""
          : suggestions.map((el, i) => {
              return (
                <AutoCompleteItem
                  autoCompleteHandleClick={autoCompleteHandleClick}
                  key={i}
                  label={el.title}
                />
              );
            })}
      </div>
    </div>
  );
};

export default SearchBar;
