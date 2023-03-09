import { wait } from '@testing-library/user-event/dist/utils';
import { useState, useEffect } from 'react'
import React from 'react';
import axios from 'axios';
import Resultitem from './Resultitem';

export default function Result(props) {

  const [result, setResult] = useState([]);


  useEffect(() => {
    bringData();
  }, [props.searchItem])


  const bringData = async () => {

    props.setProgress(20)
    const options = await {
      method: 'GET',
      url: 'https://google-search74.p.rapidapi.com/',
      params: { query: `${props.searchItem}`, limit: '10', related_keywords: 'true' },
      headers: {
        'X-RapidAPI-Key': `${props.apiKey}`,
        'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
      }
    }
    props.setProgress(50);
    axios.request(options).then(async function (response) {
      console.log((response.data))
      props.setProgress(70)
      let data = await response.data.results;
      setResult(data);
      console.log('mai hu dta', data);
      props.setProgress(100)
    }).catch(error=>{
      
      console.log(error.response.status)
      if(error.response.status!=200){
        let data=[{
            description: "Try contacting owner",
            position: 1,
          title: "Sorry, Api limit reached",
          url: ""
          }]
          setResult(data);
      }
    })
  }


// let data=[{
//   description: "Find great buys on cell phones, plans, & service at Cricket, where you get reliable nationwide coverage, affordable prepaid rates & no annual contract.",
//   position: 1,
// title: "Prepaid Phones: No Contract Cell Phone Plans | Cricket Wireless",
// url: "https://www.cricketwireless.com/"
// },
// {
//   description: "Find great buys on cell phones, plans, & service at Cricket, where you get reliable nationwide coverage, affordable prepaid rates & no annual contract.",
//   position: 2,
// title: "Prepaid Phones: No Contract Cell Phone Plans | Cricket Wireless",
// url: "https://www.cricketwireless.com/"
// }
// ]


  return (
    <>
      <div>
        {
          result.map((element) => {
            return <div key={result.indexOf(element)}>
              <Resultitem title={element.title} description={element.description.slice(0, 35)} url={element.url} />
            </div>
          })
        }
      </div>


      {/* for try */}
      {/* <div>
        {
          data.map((element) => {
            return <div key={element.position}>
              <Resultitem title={element.title} description={element.description.slice(0, 35)} url={element.url} />
            </div>
          })
        }
      </div> */}
    </>
  )
}
