import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import Footer from '../components/footer/Footer'
import Detail from '../pages/detail/Detail'
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {
  return (
<>
<Navbar />

<Routes>
    <Route path='/' element= {<Home />} />
    <Route element= {<PrivateRouter />} >
      <Route path='/about' element= {<About />} />
      <Route path='/detail/:id' element= {<Detail />} />
    </Route>  
    <Route path='/register' element= {<Register />} />
    <Route path='/login' element= {<Login />} />
</Routes>

<Footer />
</>

  )
}

export default AppRouter