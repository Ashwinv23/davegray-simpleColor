import React from "react";

const Color = ({ color, hex, isDark }) => {
  return (
    <div
      className="color"
      style={{ background: color, color: isDark ? "#000" : "#FFF" }}
    >
      <p>{color ? color : "Empty"}</p>
      <p>{hex ? hex : null}</p>
    </div>
  );
};

export default Color;
