import React, { useState } from 'react'
import Navigation from '../Components/Navigation'
import {
    HashRouter as Router,
    Routes as Switch,
    Route
} from "react-router-dom";
import NavBar from './Navbar'
import Result from './Result'
import Image from './Image'
import Video from './Video'
import LoadingBar from 'react-top-loading-bar';
import context from '../Context/createContext';
import Home from './Home'
import { useContext } from 'react';
function Parent(props) {
    const c=useContext(context);
    const [home, sethome] = useState(true);
    return (
        <>
        <LoadingBar
          // height={3}
          color='#f11946'
          progress={c.progress}
        />
        {home && <div>
            <Home sethome={sethome}/>
        </div>}
        {!home && <div>
                <div><NavBar /></div>      
            <Router>
                <Navigation />
                <div className="top positon-content">
                    <Switch>
                        <Route exact path='/' element={<Result />}></Route>
                        <Route exact path='/image' element={<Image />}></Route>
                        <Route exact path='/video' element={<Video />}></Route>
                    </Switch>
                </div>
            </Router>

        </div>}
        </>
    )
}

export default Parent