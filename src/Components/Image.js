import React from 'react'
import { useState, useEffect, useContext } from 'react';
import ImageItem from './ImageItem';
import axios from 'axios';
import { useSearchParams, useNavigate } from 'react-router-dom';
import './style.css'
export default function Image(props) {

  const apiKey = process.env.REACT_APP_API_KEY

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

  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const navigate = useNavigate();
  if (!query) {
    navigate('/');
  }

  useEffect(() => {

    bringData();
    // setProgress(20);
  }, [query]);



  const bringData = async () => {
    const options = {
      method: 'GET',
      url: 'https://joj-image-search.p.rapidapi.com/v2/',
      params: { q: `${query}`, hl: 'en' },
      headers: {
        'X-RapidAPI-Key': `${apiKey}`,
        'X-RapidAPI-Host': 'joj-image-search.p.rapidapi.com'
      }
    };
    // setProgress(50);
    axios.request(options).then(function (response) {
      // console.log(response.data.response.images);
      // setProgress(70);
      // setProgress(80);
      setresult(response.data.response.images);

      // setProgress(100);
    }).catch(error => {
      // console.log(error.response.status)
      if (error.response.status != 200) {
        alert('image api limit reached')
      }
    })
  }


  return (
    <>
      <div className=" d-grid gallery">

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
