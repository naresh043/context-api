import React, {  useState } from 'react'
import { themeContext } from './ThemeContext'
function ThemeProvider({children}) {
    const [theme,setTheme]=useState("light")
    const value={theme,setTheme}
  return (
    <themeContext.Provider value={value}>{children}</themeContext.Provider>
  )
}

export default ThemeProvider