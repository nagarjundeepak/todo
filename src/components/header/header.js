import React from "react";
import { ReactComponent as Vector } from "../../assets/vector.svg";

function header() {
  return (
    <div className="header">
      <Vector className="header__vector" />
      <div className="header__text">Team To-Dos</div>
    </div>
  );
}

let Header = React.memo(header);

export { Header };
