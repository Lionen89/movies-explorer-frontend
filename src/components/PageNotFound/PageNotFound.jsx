import { Link } from "react-router-dom";

import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div className="not-found">
      <span className="not-found__title">404</span>
      <h3 className="not-found__text">Страница не найдена</h3>
      <Link className="not-found__button" to="/">
        Назад
      </Link>
    </div>
  );
}

export default PageNotFound;
