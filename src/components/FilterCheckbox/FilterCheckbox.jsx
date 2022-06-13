import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <section>
      <input type="checkbox" id="short" className="filter-checkbox" />
      <label for="short" className="filter-checkbox__text">Короткометражки</label>
    </section>
  );
}
export default FilterCheckbox;
