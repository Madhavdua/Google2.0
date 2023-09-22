import React from 'react'
import context from './createContext';
import { useState } from 'react';

function AllContext(props) {
  const key=process.env.REACT_APP_API_KEY;
  const [query, setQuery] = useState('');
  const [progress, setProgress] = useState(100);


  
  return (
    <>
    <context.Provider value={{key,query,setQuery,progress,setProgress}}>
        {props.children}
    </context.Provider>
    </>
  )
}

export default AllContext;