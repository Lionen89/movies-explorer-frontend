import React from "react";
import "./MoreButton.css";

function MoreButton(props) {

  return (
    <div className="more-button__container">
      <button className="more-button" onClick={props.loadMore}>
        Ещё
      </button>
    </div>
  );
}
export default MoreButton;
