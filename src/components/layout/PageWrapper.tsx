import React from 'react'
import {Outlet} from "react-router-dom"
import "./PageWrapper.css"

const PageWrapper = () => {
  return (
    <main className='container'><Outlet/></main>
  )
}

export default PageWrapper