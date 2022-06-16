import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
function SearchForm() {
  return (
    <>
      <section className="search-form">
        <form className="search-form__film-container">
        <label className="search-form__form-field">
          <button className="search-form__loupe"></button>
          <input
            required
            type="name"
            placeholder="Фильм"
            className="search-form__input"
          ></input>
          <button className="search-form__arrow"></button>
        </label>
        </form>
        <FilterCheckbox />
      </section>
    </>
  );
}
export default SearchForm;
