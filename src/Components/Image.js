import React from 'react'
import { useState,useEffect } from 'react';
import ImageItem from './ImageItem';
import axios from 'axios';
export default function Image(props) {
  
const [result, setresult] = useState([]);
useEffect(() => {
  bringData(); 

},[props.searchItem]);
props.setProgress(20);
const bringData=async ()=>{
  const options =await {
    method: 'GET',
    url: 'https://joj-image-search.p.rapidapi.com/v2/',
    params: {q: `${props.searchItem}`, hl: 'en'},
    headers: {
      'X-RapidAPI-Key': `${props.apiKey}`,
      'X-RapidAPI-Host': 'joj-image-search.p.rapidapi.com'
    }
  };
  props.setProgress(50);
  axios.request(options).then(function (response) {
    // console.log(response.data.response.images);
    props.setProgress(70);
    props.setProgress(80);
    setresult(response.data.response.images);
    props.setProgress(100);
  }).catch(error=>{
    console.log(error.response.status)
    if(error.response.status!=200){
      alert('image api limit reached')
    }
  })

}

// let data=[
//  { by:"https://unsplash.com/plus?referrer=%2Fphotos%2FEENk9naO_zk",
// id: "de00a463-3520-41c5-b666-0f58674f7f3c",
// image:"https://plus.unsplash.com/premium_photo-1671751034172-a3974a82ed97?ixlib=rb-4.0.3&,ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
// source:"https://unsplash.com"
// },
//  { by:"https://unsplash.com/plus?referrer=%2Fphotos%2FEENk9naO_zk",
// id: "de00a463-3520-41c5-bsdsds6-0dvf58674f7f3c",
// image:"https://plus.unsplash.com/premium_photo-1671751034172-a3974a82ed97?ixlib=rb-4.0.3&,ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
// source:"https://unsplash.com"
// },
//  { by:"https://unsplash.com/plus?referrer=%2Fphotos%2FEENk9naO_zk",
// id: "de00asdfsdfs63-3520-41c5-b666-0f58674f7f3c",
// image:"https://plus.unsplash.com/premium_photo-1671751034172-a3974a82ed97?ixlib=rb-4.0.3&,ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
// source:"https://unsplash.com"
// },
//  { by:"https://unsplash.com/plus?referrer=%2Fphotos%2FEENk9naO_zk",
// id: "dghfhf00a463-3520-41c5-b666-0f58674f7f3c",
// image:"https://plus.unsplash.com/premium_photo-1671751034172-a3974a82ed97?ixlib=rb-4.0.3&,ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
// source:"https://unsplash.com"
// },
//  { by:"https://unsplash.com/plus?referrer=%2Fphotos%2FEENk9naO_zk",
// id: "dghfhf00a463-3520-41c5-b666-0f5sdf7f3c",
// image:"https://plus.unsplash.com/premium_photo-1671751034172-a3974a82ed97?ixlib=rb-4.0.3&,ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
// source:"https://unsplash.com"
// },
// ]


  return (
    <>
    <div className='d-flex flex-wrap container'>
        {
          result.map((element)=>{
            return <div key={result.indexOf(element)} className="d-flex flex-wrap">
               <ImageItem url={element.image.url}></ImageItem>
            </div>
          })
        }
    </div>



    {/* for trying below */}
    {/* <div className="mx-2 d-flex flex-wrap">

    {
    data.map(element=>{
      return <div key={data.indexOf(element)} className="p-1">
               <ImageItem url={element.image}></ImageItem>
            </div>
    })
    }
    </div> */}
    </>
  )
}
