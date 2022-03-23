import React from "react";
import colorNames from "colornames";

const Input = ({ color, setColor, setHex, isDark, setIsDark }) => {
  return (
    <form className="formInput" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="colorInput"></label>
      <input
        id="colorInput"
        type="text"
        placeholder="Type a color"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
          setHex(colorNames(e.target.value));
        }}
      />
      <button onClick={() => setIsDark(!isDark)}>Toggle text color</button>
    </form>
  );
};

export default Input;
