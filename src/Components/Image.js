import React from 'react'
import { useState, useEffect, useContext } from 'react';
import ImageItem from './ImageItem';
import axios from 'axios';
import context from '../Context/createContext'
import './style.css'
export default function Image(props) {

  const c = useContext(context);
  const { query, key ,setProgress} = c;

  // let data = [
  //   {
  //     image: "https://source.unsplash.com/random/tree",
  //   },
  //   {
  //     image: "https://source.unsplash.com/random/water",
  //   },
  //   {
  //     image: "https://source.unsplash.com/random/book",
  //   },
  //   {
  //     image: "https://source.unsplash.com/random/girls",
  //   },
  //   {
  //     image: "https://source.unsplash.com/random/country",
  //   },
  //   {
  //     image: "https://source.unsplash.com/random/tree",
  //   },

  // ]
  const [result, setresult] = useState([]);


  useEffect(() => {

    bringData();
    setProgress(20);
  }, [query]);



  const bringData = async () => {
    const options = {
      method: 'GET',
      url: 'https://joj-image-search.p.rapidapi.com/v2/',
      params: { q: `${query}`, hl: 'en' },
      headers: {
        'X-RapidAPI-Key': `${key}`,
        'X-RapidAPI-Host': 'joj-image-search.p.rapidapi.com'
      }
    };
    setProgress(50);
    axios.request(options).then(function (response) {
      // console.log(response.data.response.images);
      setProgress(70);
      setProgress(80);
      setresult(response.data.response.images);

      setProgress(100);
    }).catch(error => {
      // console.log(error.response.status)
      if (error.response.status != 200) {
        alert('image api limit reached')
      }
    })
  }


  return (
    <>
      <div className=" d-grid gallery" style={ { marginLeft: "15%" }}>

        {
           result && result.map(element => {
             return <div key={result.indexOf(element)} className="p-1" >
               <ImageItem url={element.image.url} ></ImageItem>
            </div>
          })
        }
      </div>

      <div>
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      </div>


      {/* for trying below */}
      {/* <div className=" d-flex flex-wrap" style={window.innerWidth > '750px' ? { marginLeft: "15%", marginRight: "5%" } : { margin: "5% 2%", justifyContent: "center" }}>

        {
          data.map(element => {
            let idx = Math.floor(Math.random() * (lazyBg.length));
            const lazyBgUrl = lazyBg[idx];
            return <div key={data.indexOf(element)} className="p-1" >
              <ImageItem url={element.image} lazyBgUrl={lazyBgUrl}></ImageItem>
            </div>
          })
        }
      </div> */}
    </>
  )
}
