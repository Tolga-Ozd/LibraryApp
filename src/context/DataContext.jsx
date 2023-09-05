import axios from "axios"
import { createContext, useContext, useState } from "react"

const DataContext = createContext()
const DataContextProvider = ({children}) => {

    const  [data , setData] = useState("")

    const getData = async() => {
        const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=react&printType=books&key=AIzaSyCpvIY9QQeQayYrH5f9S8lsrPV0qS2NVMo"
        try {
          const {data} = await axios(BASE_URL)
          setData(data.items)
          console.log(data.items)
        } catch (error) {
          console.log(error)
        }
      }

   const values ={ data , setData, getData}
    
  return (
    < DataContext.Provider value = {values}>
        {children}
    </DataContext.Provider>

  )
}

export const useDataContext =()=>{
    return useContext(DataContext)
}

export default DataContextProvider
