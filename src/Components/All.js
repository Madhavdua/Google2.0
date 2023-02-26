import React from 'react'
import Result from './Result'
import Home from './Home';
import Images from './Images';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

export default function All(props) {
  console.log("All called")

  return (
    <>
    <Router>
      <nav className="navbar navbar-expand-lg">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">All</Link>
            <Link className="nav-link " to="/">Images</Link>
            <Link className="nav-link" to="/">News</Link>
          </div>
        </div>
      </nav>

      {/* <Switch >

      <Route exact path='/' key={1} element={<Result searchItem={props.searchItem} setProgress={props.setProgress} />}></Route>
      <Route exact path='/' key={2} element={<Result searchItem={props.searchItem} setProgress={props.setProgress} />}></Route>
      <Route exact path='/' key={3} element={<Result searchItem={props.searchItem} setProgress={props.setProgress} />}></Route>

      </Switch> */}

    </Router>
    <h1> i am all</h1>
    <Images searchItem={props.searchItem} setProgress={props.setProgress}/>
    </>
  )
}
