import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'

const AppRouter = () => {
  return (
<>
<Navbar />

<Routes>
    <Route path='/' element= {<Home />} />
    <Route path='/about' element= {<About />} />
    <Route path='/register' element= {<Register />} />
    <Route path='/login' element= {<Login />} />
</Routes>

</>

  )
}

export default AppRouter