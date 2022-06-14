import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard"
import { useLocation } from "react-router-dom";


function MoviesCardList() {
  const location = useLocation();
if(location.pathname === "/saved-movies")
  return (
    <section className="mov-card-list">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
    </section>
  )
  else {
    return (
      <section className="mov-card-list">
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
      </section>
    )
  }
}
export default MoviesCardList;
