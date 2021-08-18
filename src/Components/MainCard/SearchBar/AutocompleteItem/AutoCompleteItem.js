import React from "react";
import "./AutoCompleteItem.css";

const AutoCompleteItem = (props) => {
  return (
    <p onClick={props.autoCompleteHandleClick} className="item">
      {props.label}
    </p>
  );
};
export default AutoCompleteItem;
