import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './style.css'
export default function Navigation() {

  let location = useLocation();
  let path = location.pathname;


  return (
    <>

      <div className=" d-block my-1" style={{marginLeft:"15%"}}>
        <Link to='/' className={`navigation-link  mx-2 ${path === '/' ? "text-primary" : "text-dark"}`} >All</Link>
        <Link to='/image' className={`navigation-link mx-2 ${path === '/image' ? "text-primary" : "text-dark"}`} >Images</Link>
        <Link to='/video' className={`navigation-link  mx-2 ${path === '/video' ? "text-primary" : "text-dark"}`} >Videos</Link>
      </div>
      <hr></hr>
    </>

  )
}
