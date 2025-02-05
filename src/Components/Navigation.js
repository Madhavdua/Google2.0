import React from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import './style.css'
export default function Navigation() {

  let location = useLocation();
  let path = location.pathname;

  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  return (
    <>
      <div className=" d-block my-1" style={{ marginLeft: "15%" }}>
        <Link to={`all?query=${query}`} className={`navigation-link  mx-2 ${path === '/search' ? "text-primary" : "text-dark"}`} >All</Link>
        <Link to={`image?query=${query}`} className={`navigation-link mx-2 ${path === '/image' ? "text-primary" : "text-dark"}`} >Images</Link>
        <Link to={`video?query=${query}`} className={`navigation-link  mx-2 ${path === '/video' ? "text-primary" : "text-dark"}`} >Videos</Link>
      </div>
      <hr></hr>
    </>

  )
}
