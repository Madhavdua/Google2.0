import React from 'react'

import { useState, useEffect } from 'react';
import queryFile from './queries.json'
import Fuse from 'fuse.js'
import './style.css'
import News from './News';
import { useNavigate } from 'react-router-dom';


export default function Home(props) {

  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [suggestion, setSuggestion] = useState([]);
  const [fontSize, setfontSize] = useState('5rem');
  const [searchWidth, setsearchWidth] = useState('30rem');



  const enter = (e) => {
    if (e.keyCode === 13 && text.length > 0) {
      // to be redirected to search page
      navigate(`search/all?query=${text}`);

    }
  }
  useEffect(() => {
    const result = fuse.search(text);
    setSuggestion(result.slice(0, Math.min(result.length, 8)));
    // console.log(suggestion);
  }, [text])


  const w = window.innerWidth;
  useEffect(() => {
    width();
  })
  const fuse = new Fuse(queryFile, {
    keys: ['query']
  })

  const width = () => {
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
            <input type="text" className="form-control search-1" placeholder="Search" onKeyDown={enter} value={text} onChange={writing} />
          </div>
          {suggestion.length > 0 && <div className=' suggestion-box suggestion-box-home mt-5' >
            {
              suggestion && suggestion.length > 0 && suggestion.map((element) => {
                return <div key={element.refIndex} className='suggest'
                  onMouseDown={(e) => {
                    navigate(`search/all?query=${element.item.query}`);

                  }}
                >{element.item.query}</div>
              })
            }
          </div>}
        </div>
      </div>
      <News />
    </>
  )
}
