import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem';
function News() {
  const [news, setNews] = useState([]);
  const key=process.env.REACT_APP_API_KEY;
  console.log(key);
  useEffect(() => {
    bringnews();
  }, [])
  const options = {
    method: 'GET',
    url: 'https://news67.p.rapidapi.com/v2/country-news',
    params: {
      fromCountry: 'in',
      onlyInternational: 'true'
    },
    headers: {
      'X-RapidAPI-Key': key,
      'X-RapidAPI-Host': 'news67.p.rapidapi.com'
    }
  };
  const bringnews = async () => {
    await axios.request(options).then((res) => {
      const data = res.data.news;
      // console.log(data);
      setNews(data);
    }).catch((err) => {
      console.log(err);
    })
  }
  return (
    <>
      {news && news.length > 0 &&

        <>
          <div className='trending'>Trending  &#x2604;</div>
          <div className='news-box'>
            {news.map((element) => {
              return <div key={news.indexOf(element)}><NewsItem element={element} /></div>
            })}

          </div>
        </>

      }
    </>
  )
}

export default News