import React from 'react'
import Result from './Result';
import Home from './Home';
import Image from './Image';
import Searchbar from './Searchbar'
import { useState } from 'react';
import {
    HashRouter as Router,
    Routes as Switch,
    Route,
    Link
} from "react-router-dom";
import Navigation from './Navigation';

export default function Navbar(props) {
    const [searchItem, setSearchItem] = useState(props.query);

    const itemchange = (val) => {
        setSearchItem(val);
    }
    return (
        <>
        <Router>
            <div className=' mt-4 mb-3 mx-4  d-flex bd-highlight mb-3 flex-wrap' style={{ fontFamily: 'Inter', fontWeight: '600' }}>
                <div className="google px-4 ">
                    <a href='/' style={{ color: "#4285F4", textDecoration: 'none', fontSize: '2rem' }}>G</a>
                    <a href='/' style={{ color: "#DB4437", textDecoration: 'none', fontSize: '2rem' }}>o</a>
                    <a href='/' style={{ color: "#F4B400", textDecoration: 'none', fontSize: '2rem' }}>o</a>
                    <a href='/' style={{ color: "#4285F4", textDecoration: 'none', fontSize: '2rem' }}>g</a>
                    <a href='/' style={{ color: "#0F9D58", textDecoration: 'none', fontSize: '2rem' }}>l</a>
                    <a href='/' style={{ color: "#DB4437", textDecoration: 'none', fontSize: '2rem' }}>e</a>
                </div>
                <Searchbar searchItem={searchItem} itemchange={itemchange} />
            </div>
                <Navigation></Navigation>
            
            <hr className=' mx-auto' /> 
            <div className="top">
                <Switch>
                    <Route exact path='/' element={<Result apiKey={props.apiKey} searchItem={searchItem} setProgress={props.setProgress} />}></Route>
                    <Route exact path='/image' element={<Image apiKey={props.apiKey} searchItem={searchItem} setProgress={props.setProgress} />}></Route>
                </Switch>
            </div>


        </Router>
        {/* <Result apiKey={props.apiKey} searchItem={searchItem} setProgress={props.setProgress} /> */}

        </>
    )
}
