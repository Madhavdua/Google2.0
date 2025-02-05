import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Navigation from './Navigation'
import "./style.css"
function Search() {
  return (
    <>
      <Navbar />
      <Navigation />
<div className='position-content'>
        <Outlet />

      </div>
    </>
  )
}

export default Search