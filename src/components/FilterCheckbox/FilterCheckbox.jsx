import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <article>
        <label className="filter-checkbox">
      <input type="checkbox" className="filter-checkbox__input" />
      <span className="filter-checkbox__custom-checkbox"></span>
      <span className="filter-checkbox__text">Короткометражки</span>
      </label>
    </article>
  );
}
export default FilterCheckbox;
