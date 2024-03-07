import { useState, useEffect,useContext } from 'react'
import React from 'react';
import axios from 'axios';
import context from '../Context/createContext'
import Resultitem from './Resultitem';

export default function Result() {
  const c = useContext(context);
  const { query, key, setProgress } = c;

  const [result, setResult] = useState([]);

  const url = 'https://google-search74.p.rapidapi.com/'
  useEffect(() => {
    console.log("sent q",query);
    bringData();
  }, [query])


  const bringData = async () => {

    setProgress(20)
    const options = {
      method: 'GET',
      url: url,
      params: { query: `${query}`, limit: '20', related_keywords: 'true' },
      headers: {
        'X-RapidAPI-Key': `${key}`,
        'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
      }
    }
    setProgress(50);
    axios.request(options).then(async function (response) {
      // console.log((response.data))
      setProgress(70)
      let data = await response.data.results;
      setResult(data);
      // console.log('mai hu dta', data);
      setProgress(100)
    }).catch(error => {

      console.log(error.response.status)
      if (error.response.status != 200) {
        let data = [{
          description: "Try contacting owner",
          position: 1,
          title: "Sorry, Api limit reached",
          url: ""
        }]
        setResult(data);
      }
    })
  }



  // let data = [{
  //   description: "Find great buys on cell phones, plans, & service at Cricket, where you get reliable nationwide coverage, affordable prepaid rates & no annual contract.",
  //   position: 1,
  //   title: "Prepaid Phones: No Contract Cell Phone Plans | Cricket Wireless",
  //   url: "https://www.cricketwireless.com/"
  // },
  // {
  //   description: "Find great buys on cell phones, plans, & service at Cricket, where you get reliable nationwide coverage, affordable prepaid rates & no annual contract.",
  //   position: 2,
  //   title: "Prepaid Phones: No Contract Cell Phone Plans | Cricket Wireless",
  //   url: "https://www.cricketwireless.com/"
  // }
  // ]


  return (
    <>
      <div className='' >
        {
          result.map((element) => {
            return <div key={result.indexOf(element)}>
              <Resultitem title={element.title} description={element.description.slice(0, 35)} url={element.url} />
            </div>
          })
        }
      </div>
      {/* <div className='text-center my-3' >
          <button className='btn btn-primary' onClick={()=>{addData()}}>Show more</button>
      </div> */}


      {/* for try */}
      {/* <div style={{marginLeft:"15%",marginRight:"5%"}}>
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
