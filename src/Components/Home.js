import React from 'react'
import Navbar from './Navbar'

import { useState } from 'react';
// import Searchbar from './Searchbar'
export default function Home(props) {
  const [text, setText] = useState(props.query)
  const enter = (e) => {
    if (e.keyCode === 13 && text.length>0) {
      console.log('enter pressed')
      props.page(false,text);
    }
  }
  const writing = (v) => {
    setText(v.target.value);
  }
  return (
    <div className='text-center mt-5' style={{ fontFamily: 'Inter', fontWeight: '600' }}>
      <a href='/' style={{ color: "#4285F4", textDecoration: 'none', fontSize: '5rem' }}>G</a>
      <a href='/' style={{ color: "#DB4437", textDecoration: 'none', fontSize: '5rem' }}>o</a>
      <a href='/' style={{ color: "#F4B400", textDecoration: 'none', fontSize: '5rem' }}>o</a>
      <a href='/' style={{ color: "#4285F4", textDecoration: 'none', fontSize: '5rem' }}>g</a>
      <a href='/' style={{ color: "#0F9D58", textDecoration: 'none', fontSize: '5rem' }}>l</a>
      <a href='/' style={{ color: "#DB4437", textDecoration: 'none', fontSize: '5rem' }}>e</a>
      <div className="container d-flex justify-content-center mt-5" style={{ width: "30rem" }}>

        <div className="input-group mb-3 ">
          <span className="input-group-text"> <i className="fa fa-search"></i></span>
          <input type="text" className="form-control" placeholder="Search" onKeyDown={enter} value={text} onChange={writing} />
        </div>
      </div>
    </div>
  )
}
