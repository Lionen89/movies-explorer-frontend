import React from "react";
import "./FilterCheckbox.css";
import { useLocation } from "react-router-dom";

function FilterCheckbox(props) {
  return (
    <article>
      <label className="filter-checkbox">
        <input type="checkbox" className="filter-checkbox__input"/>
        <span className= {`filter-checkbox__custom-checkbox ${
          props.status ? "filter-checkbox__custom-checkbox_active" : ""
        }
        `}
        onClick={props.onChange}></span>
        <span className="filter-checkbox__text">Короткометражки</span>
      </label>
    </article>
  );
}
export default FilterCheckbox;
