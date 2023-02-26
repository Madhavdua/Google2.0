import { wait } from '@testing-library/user-event/dist/utils';
import { useState, useEffect } from 'react'
import React from 'react';
import axios from 'axios';

export default function Images(props) {
    const [result, setresult] = useState('https://www.google.com/url?sa=i&url=https%3A%2F%2Flearn.onemonth.com%2Fwhat-is-a-404-page%2F&psig=AOvVaw1xaqnHxTekfwsmBmgnCoQA&ust=1677515055476000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOCOh9jMs_0CFQAAAAAdAAAAABAD')

    useEffect(() => {
        bringData();
      }, [props.searchItem])

    const bringData=async()=>{
        props.setProgress(20);
        const options = {
            method: 'GET',
            url: 'https://bing-image-search1.p.rapidapi.com/images/trending',
            // params: {q: 'Cricket'},
            headers: {
              'X-RapidAPI-Key': 'c435dfcd61mshdaece6509457ad0p14b710jsn8c4794485125',
              'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
            }
          };
        props.setProgress(50);
        
        axios.request(options).then(async function (response) {
            console.log(response.data);
            props.setProgress(70)
            props.setProgress(100)
        })
    }


  return (
    <>
<h1>i am image</h1>
    </>
  )
}
