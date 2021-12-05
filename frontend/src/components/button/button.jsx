import React from "react";
import "./button.css";

function Button({
  text = "",
  click = () => {},
  disabled = false,
  type = "default",
}) {
  return (
    <>
      <button className={type} onClick={click} disabled={disabled}>
        {text}
      </button>
    </>
  );
}

export default Button;
