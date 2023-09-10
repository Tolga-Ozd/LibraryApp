// Auth Context
import { useContext ,useState , createContext } from "react";

//! 1-AuthContext oluşturuldu
const AuthContext = createContext()

//! 2-Sarmallayıcı(Provider) Component
const AuthContextProvider = ({children}) => {

  const [user , setUser] = useState(false)

  return (
   <AuthContext.Provider value={{user , setUser}}>
      {children}
   </AuthContext.Provider>
  )
}

//! 3-Consuming custom hook:
export const useThemeContext = () => {
  return useContext(AuthContext)
}

export default AuthContextProvider 