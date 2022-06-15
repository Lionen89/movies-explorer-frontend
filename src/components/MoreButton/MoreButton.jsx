import React from "react";
import "./MoreButton.css";
import Preloader from "../Preloader/Preloader";

function MoreButton() {
  function handleClick() {
    return <Preloader />;
  }
  return (
    <div className="more-button__container">
      <button className="more-button" onClick={handleClick}>
        Ещё
      </button>
    </div>
  );
}
export default MoreButton;
