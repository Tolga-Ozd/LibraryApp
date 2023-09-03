import React from 'react'
import Header from '../../components/header/Header'
import axios from 'axios'

const Home = () => {

  const getData = async() => {
    const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=react&printType=books&key=AIzaSyCpvIY9QQeQayYrH5f9S8lsrPV0qS2NVMo"
    try {
      const {data} = await axios(BASE_URL)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  getData()

  return (
    <div>
      <Header />
    </div>
  )
}

export default Home