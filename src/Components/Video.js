import React from 'react'
import VideoItem from './VideoItem'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams, useNavigate } from 'react-router-dom';
function Video() {
  const key = process.env.REACT_APP_API_KEY

  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const navigate = useNavigate();
  if (!query) {
    navigate('/');
  }
  useEffect(() => {
    bringVideo();
  }, [query])
  const [videoList, setVideoResult] = useState([]);

  const bringVideo = async () => {
    // setProgress(20);

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
    // setProgress(50);

    let response = await axios.request(options);
    // setProgress(70);

    // console.log(response.data.contents);
    setVideoResult(response.data.contents);
    // setProgress(90);
    // setProgress(100);
  }

  return (
    <>
      <div className='d-flex flex-column'>
        {videoList.length > 0 && videoList.map((v) => {
          // console.log(v.video);
          if (v.video) {
            const link = `https://www.youtube.com/watch?v=${v.video.videoId || "unable to fetch"}`;
            return <div className='' key={videoList.indexOf(v)}><VideoItem v={v.video} link={link} /></div>
          }
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