import React from "react";
import "./ToggleSlider.css";

function ToggleSlider(props) {
  const { onChange } = props;

  return (
    <label className="switch">
      <input type="checkbox" onChange={onChange} />
      <span className="slider round"></span>
    </label>
  );
}

export default ToggleSlider;
