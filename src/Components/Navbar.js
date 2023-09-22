import React from 'react'
import { useState } from 'react';
import Searchbar from './Searchbar';

export default function Navbar(props) {
    const [searchItem, setSearchItem] = useState(props.query);

    const itemchange = (val) => {
        setSearchItem(val);
    }
    return (
        <>
            <div className=' mt-4 mb-3   d-flex bd-highlight mb-3 flex-wrap' style={{ fontFamily: 'Inter', fontWeight: '600', marginLeft:"50px" }}>
                <div className="google px-4 " >
                    <a href='/' style={{ color: "#4285F4", textDecoration: 'none', fontSize: '2rem' }}>G</a>
                    <a href='/' style={{ color: "#DB4437", textDecoration: 'none', fontSize: '2rem' }}>o</a>
                    <a href='/' style={{ color: "#F4B400", textDecoration: 'none', fontSize: '2rem' }}>o</a>
                    <a href='/' style={{ color: "#4285F4", textDecoration: 'none', fontSize: '2rem' }}>g</a>
                    <a href='/' style={{ color: "#0F9D58", textDecoration: 'none', fontSize: '2rem' }}>l</a>
                    <a href='/' style={{ color: "#DB4437", textDecoration: 'none', fontSize: '2rem' }}>e</a>
                </div>
                <div>
                    <Searchbar/>
                </div>
            </div>


        </>
    )
}
