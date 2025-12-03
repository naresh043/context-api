import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CounterContext } from "./context/counterContext";
import { themeContext } from "./context/ThemeContext";
function App() {
  const { count, setCount } = useContext(CounterContext);
  const { theme, setTheme } = useContext(themeContext);

  return (
    <>
      <h1>{theme}</h1>
      <button onClick={() => setTheme(theme == "light" ? "black" : "light")}>
        {theme == "light" ? "set black" : "set light"}
      </button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

export default App;
