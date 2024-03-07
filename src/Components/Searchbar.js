import React, { useEffect } from 'react'
import { useState, useContext } from 'react';
import './style.css'
import context from '../Context/createContext'
import Fuse from 'fuse.js'
import queryFile from './queries.json'

export default function Searchbar(props) {
  const c = useContext(context);
  const { query, key, setQuery } = c;

  // states
  const [text, setText] = useState(query);
  const [suggestion, setSuggestion] = useState([]);
  const [showsuggestion, setShowsuggestion] = useState(false);


  const fuse = new Fuse(queryFile, {
    keys: ['query']
  })
  useEffect(() => {
    const result = fuse.search(text);
    setSuggestion(result.slice(0, Math.min(result.length, 8)));
    // console.log(suggestion);
  }, [text])
  const enter = (e) => {
    if (e.keyCode === 13 && text.length > 0) {
      console.log('enter pressed')
      setQuery(text);
    }
  }
  const writing = (v) => {
    setText(v.target.value);
  }

  return (
    <>
      <div className=' mt-2 px-2 d-flex' style={window.innerWidth > 750 ? { width: "40vw" } : { width: "70vw" }}>
        <div className="input-group">   
          <input id='s2' type="text" className="form-control search-2 " placeholder="Search" onKeyDown={enter} value={text} onChange={writing} onFocus={() => { setShowsuggestion(true) }} onBlur={() => { setShowsuggestion(false) }} />
        </div>
      </div>
      <div className='suggestion-box' style={window.innerWidth > 750 ? { width: "40vw" } : { width: "70vw" }}>
        {
          suggestion && suggestion.length > 0 && showsuggestion && suggestion.map((element) => {
            return <div key={element.refIndex} className='suggest' onMouseDownCapture={(e) => {
              setText(e.target.innerText);
              setQuery(e.target.innerText);
            }} >{element.item.query}</div>
          })
        }
      </div>
    </>
  )
}
