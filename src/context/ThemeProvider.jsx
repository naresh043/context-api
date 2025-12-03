import React, { useEffect, useState } from "react";
import { themeContext } from "./ThemeContext";
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const value = { theme, setTheme };
  useEffect(() => {
    document.body.className = ""; // remove old classes
    document.body.classList.add(theme);
  }, [theme]);
  return (
    <themeContext.Provider value={value}>{children}</themeContext.Provider>
  );
}

export default ThemeProvider;
