import React from 'react'
import { useState,useContext } from 'react';
import './style.css'
import context from '../Context/createContext'


export default function Searchbar(props) {
  const c = useContext(context);
  const { query, key ,setQuery} = c;
    const [text, setText] = useState(query);
    const enter = (e) => {
        if (e.keyCode === 13 && text.length>0) {
          console.log('enter pressed')
          setQuery(text);
        }
      }
      const writing = (v) => {
        setText(v.target.value);
      }
    return (
        <>
            <div className=' mt-2 px-2 d-flex' style={window.innerWidth>750 ?{ width: "40vw" }:{width:"70vw"}}>

                <div className="input-group" >
                    {/* <span className="input-group-text" style={{ borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px" }}> <i className="fa fa-search" ></i></span> */}
                    <input type="text" className="form-control search-2 " placeholder="Search" onKeyDown={enter} value={text} onChange={writing} />
                </div>
            </div>
        </>
    )
}
