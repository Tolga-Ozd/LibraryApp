import { useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {

 const [myTheme , setmyTheme] = useState("lihgt")

  return (
    <ThemeContext.Provider value={{myTheme , setmyTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider