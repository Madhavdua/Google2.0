import React from 'react'

import { useState, useEffect } from 'react';
import { useContext } from 'react';
import context from '../Context/createContext';
import './style.css'


export default function Home(props) {

  const c = useContext(context);


  const { query, setQuery } = c;
  const [text, setText] = useState('');
  const [fontSize, setfontSize] = useState('5rem');
  const [searchWidth, setsearchWidth] = useState('30rem');
  const enter = (e) => {
    if (e.keyCode === 13 && text.length > 0) {
      console.log('enter pressed')
      setQuery(text);
      // to be redirected to search page
      props.sethome(false);

    }
  }


  const w = window.innerWidth;
  useEffect(() => {
    width();
  })

  const width = () => {
    // console.log(w);
    if (w <= 500) {
      setsearchWidth('17rem');
      setfontSize('2rem')
    }
  }

  const writing = (v) => {
    setText(v.target.value);
  }
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')
      </style>
      <div className='home-page text-center ' style={{ fontFamily: "Poppins", fontWeight: '500', overflowX: "auto" }}>
        <a href='/' style={{ color: "#4285F4", textDecoration: 'none', fontSize: `${fontSize}` }}>G</a>
        <a href='/' style={{ color: "#DB4437", textDecoration: 'none', fontSize: `${fontSize}` }}>o</a>
        <a href='/' style={{ color: "#F4B400", textDecoration: 'none', fontSize: `${fontSize}` }}>o</a>
        <a href='/' style={{ color: "#4285F4", textDecoration: 'none', fontSize: `${fontSize}` }}>g</a>
        <a href='/' style={{ color: "#0F9D58", textDecoration: 'none', fontSize: `${fontSize}` }}>l</a>
        <a href='/' style={{ color: "#DB4437", textDecoration: 'none', fontSize: `${fontSize}` }}>e</a>
        <div className="container d-flex justify-content-center mt-5" style={{ width: `${searchWidth}` }}>

          <div className="input-group mb-3 ">
            {/* <span className="input-group-text"> <i className="fa fa-search"></i></span> */}
            <input type="text" className="form-control search-1" placeholder="Search" onKeyDown={enter} value={text} onChange={writing} />
          </div>
        </div>
      </div>
      
    </>
  )
}
