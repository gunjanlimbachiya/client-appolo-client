import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Home } from '../components/Home';
import Users from '../components/Users';
import Login from '../components/Login';
import PageWrapper from '../components/layout/PageWrapper';
const Routing = () => {
  return (
    <Routes>
     <Route path='/' element={<PageWrapper/>}>
     <Route index element={<Home/>}></Route>
     <Route path='/users' element={<Users/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     </Route>
    </Routes>
  )
}

export default Routing;