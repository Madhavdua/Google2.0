import React from 'react'
import { useState } from 'react';
import Searchbar from './Searchbar';
import './style.css'

export default function Navbar() {
    return (
        <>
            <div className='my-4  navigation-1 bd-highlight' style={{ fontFamily: 'Inter', fontWeight: '600' }}>
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
