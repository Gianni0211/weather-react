import React from "react";
import "./SearchButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const searchButton = (props) => {
  return (
    <button
      className={`search-btn ${props.bg}`}
      onClick={props.btnClikcHandler}
      type="submit"
    >
      <span>
        <FontAwesomeIcon icon={props.icon} />
      </span>
    </button>
  );
};
export default searchButton;
