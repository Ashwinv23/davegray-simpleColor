import { useState } from "react";
import Color from "./components/Color";
import Input from "./components/Input";

function App() {
  const [color, setColor] = useState("");
  const [hex, setHex] = useState("");
  const [isDark, setIsDark] = useState(true);

  return (
    <div className="App">
      <Color color={color} hex={hex} isDark={isDark} />
      <Input
        color={color}
        setColor={setColor}
        setHex={setHex}
        isDark={isDark}
        setIsDark={setIsDark}
      />
    </div>
  );
}

export default App;
