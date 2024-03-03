import React from 'react'
import VideoItem from './VideoItem'
import { useState, useEffect } from 'react';
import context from '../Context/createContext';
import axios from 'axios';
import { useContext } from 'react';
function Video() {

  const c = useContext(context);
  const { query, key, setProgress } = c;
  useEffect(() => {
    bringVideo();
  }, [query])
  const [videoList, setVideoResult] = useState([]);

  const bringVideo = async () => {
    setProgress(20);

    const options = {
      method: 'GET',
      url: 'https://youtube138.p.rapidapi.com/search/',
      params: {
        q: `${query}`,
        gl: 'IN'
      },
      headers: {
        'X-RapidAPI-Key': `${key}`,
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
      }
    };
    setProgress(50);

    let response = await axios.request(options);
    setProgress(70);

    // console.log(response.data.contents);
    setVideoResult(response.data.contents);
    setProgress(90);
    setProgress(100);
  }

  return (
    <>




      <div className='d-flex flex-column'>
        {videoList.length > 0 && videoList.map((v) => {
          const link = `https://www.youtube.com/watch?v=${v.video.videoId}`;
          // console.log(v.video);
          return <div className='' key={videoList.indexOf(v)}><VideoItem v={v.video} link={link}/></div>
        })}

      </div>

      {/* for try */}
      {/* <div className='d-flex flex-column' style={{marginLeft:"15%"}}>
        {videoArr.map((v) => {
          const link = `https://www.youtube.com/watch?v=${v.channel_id}`;

          return <div className=''><VideoItem v={v} link={link} /></div>
        })}

      </div> */}
    </>
  )
}

export default Video