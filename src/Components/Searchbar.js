import React from 'react'
import { useState } from 'react';

export default function Searchbar(props) {
    const [text, setText] = useState(props.searchItem);
    const enter = (e) => {
        if (e.keyCode === 13 && text.length>0) {
          console.log('enter pressed')
          props.itemchange(text);
        }
      }
      const writing = (v) => {
        setText(v.target.value);
      }
    return (
        <>
            <div className='mt-2 px-4 d-flex' style={{ width: "30rem" }}>

                <div className="input-group " >
                    <span className="input-group-text" style={{ borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px" }}> <i className="fa fa-search" ></i></span>
                    <input type="text" className="form-control" placeholder="Search" onKeyDown={enter} value={text} onChange={writing}  style={{ borderRadius: "20px", borderTopLeftRadius: "0", borderBottomLeftRadius: "0" }}/>
                </div>
            </div>
        </>
    )
}
