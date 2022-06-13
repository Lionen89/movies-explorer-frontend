import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
function SearchForm() {
  return (
    <>
      <section className="search-form">
        <div className="search-form__film-container">
          <div className="search-form__loupe"></div>
          <input
            type="name"
            placeholder="Фильм"
            className="search-form__input"
          ></input>
          <div className="search-form__arrow"></div>
        </div>
        <FilterCheckbox />
      </section>
    </>
  );
}
export default SearchForm;
