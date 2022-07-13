import React, { useEffect } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import { useLocation } from "react-router-dom";

function SearchForm(props) {
  useEffect(() => {
    props.setIsDataChange(false);
  }, [props.isDataChange]);

  const location = useLocation();
  const [keyword, setKeyword] = React.useState('');
  const defaultValue =
      location.pathname === "/saved-movies" ?
          localStorage.getItem("keySavedMovie") :
          localStorage.getItem("keyword");

  function handleInputChange(e) {
    setKeyword(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(keyword);
  };

  return (
    <>
      <section className="search-form">
        <form className="search-form__film-container" onSubmit={handleSubmit}>
          <label className="search-form__form-field">
            <button className="search-form__loupe"></button>
            <input
              required
              type="name"
              placeholder="Фильм"
              defaultValue={defaultValue}
              className="search-form__input"
              onChange={handleInputChange}
            ></input>
            <button className="search-form__arrow"></button>
          </label>
        </form>
        <FilterCheckbox
          status={props.checkboxStatus}
          onChange={props.onCheckboxChange}
        />
      </section>
    </>
  );
}
export default SearchForm;
