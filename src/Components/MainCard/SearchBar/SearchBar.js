import React, { useState, useContext } from "react";
import "./SearchBar.css";
import axios from "axios";
import apiKey from "../../../consts/autocompleteKey";
import weatherKey from "../../../consts/weatherKey";
import { autoCompleteUrl } from "../../../consts/url";
import { weatherUrl } from "../../../consts/url";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import SearchButton from "./SearchButton/SearchButton";
import AutoCompleteItem from "./AutocompleteItem/AutoCompleteItem";
import LocationCurrentContext from "../../../store/LocationCurrentContext";

const SearchBar = (props) => {
  const [inputText, setInputText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [searchLocation, setsearchLocation] = useState({});
  const [currentWeather, setCurrentWeather] = useContext(
    LocationCurrentContext
  );

  const autoCompleteHandleClick = (text) => {
    let selectedText = text.target.textContent;
    setInputText(selectedText);
    let matchedSugg = suggestions.filter((el) => {
      return reverseSuggestions(el.title) === selectedText;
    })[0];
    let countryCode = matchedSugg.address.countryCode;
    let cityName = matchedSugg.title.split(",");
    cityName = cityName[cityName.length - 1];
    setsearchLocation({
      cityName,
      countryCode,
    });

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
      setsearchLocation({
        cityName: text,
        countryCode: "",
      });
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
  const getWeather = async (e) => {
    e.preventDefault();
    let city = searchLocation.cityName.replace(/\s/g, "");
    if (searchLocation.countryCode) {
      let cnt = searchLocation.countryCode.toLowerCase();

      await axios
        .get(`${weatherUrl}?q=${city},${cnt}&appid=${weatherKey}`)
        .then((resp) => {
          setCurrentWeather(resp.data);
        });
    } else {
      await axios
        .get(`${weatherUrl}?q=${city}&appid=${weatherKey}`)
        .then((resp) => {
          setCurrentWeather(resp.data);
        });
    }
  };

  const reverseSuggestions = (suggestion) => {
    return suggestion.split(",").reverse().join("");
  };
  return (
    <div>
      <form className="search-bar">
        <SearchButton
          bg={"white-bg"}
          icon={faSearch}
          btnClikcHandler={getWeather}
        />

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
                  label={reverseSuggestions(el.title)}
                />
              );
            })}
      </div>
    </div>
  );
};

export default SearchBar;
