import React from 'react'
import { useState,useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
export default function Navigation() {
    
  let location=useLocation();
  let path=location.pathname;
  

  return (
    <div className="mx-5 d-block">
            <Link to='/' className={`text-decoration-none mx-4 ${path==='/'?"text-primary":"text-secondary"}`} > <i className="fa fa-search" ></i>    All</Link>
            <Link to='/image' className={`text-decoration-none mx-4 ${path==='/image'?"text-primary":"text-secondary"}`} >Images</Link>
            </div>
  )
}
