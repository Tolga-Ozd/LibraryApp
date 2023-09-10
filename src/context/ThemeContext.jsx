import { useContext ,useState , createContext } from "react";

//! 1-ThemeContext oluşturuldu
const ThemeContext = createContext()

//! 2-Sarmallayıcı(Provider) Component
const ThemeContextProvider = ({children}) => {

  const [myTheme , setMyTheme] = useState("light")

  return (
   <ThemeContext.Provider value={{myTheme , setMyTheme}}>
      {children}
   </ThemeContext.Provider>
  )
}

//! 3-Consuming custom hook:
export const useThemeContext = () => {
  return useContext(ThemeContext)
}

export default ThemeContextProvider