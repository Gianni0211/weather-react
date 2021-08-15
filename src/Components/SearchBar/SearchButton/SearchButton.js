import React from "react";
import "./SearchButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const searchButton = (props) => {
  return (
    <button type="submit">
      <span>
        <FontAwesomeIcon icon={faSpinner} />
      </span>
    </button>
  );
};
export default searchButton;
