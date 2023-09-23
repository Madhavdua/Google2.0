import React from 'react'
import VideoItem from './VideoItem'
import { useState,useEffect } from 'react';
import context from '../Context/createContext';
import axios from 'axios';
import { useContext } from 'react';
function Video() {
  
  const c=useContext(context);
  const {query,key,setProgress}=c;
  useEffect(() => {
    bringVideo();
  }, [query])
  const[videoList,setVideoResult]=useState([]);
  
  const bringVideo=async()=>{
    setProgress(20);

    const options = {
      method: 'GET',
      url: 'https://youtube-search6.p.rapidapi.com/search/',
      params: {
        query: `${query}`,
        number: '20',
        // country: 'us',
        lang: 'en'
      },
      headers: {
        'X-RapidAPI-Key': `${key}`,
        'X-RapidAPI-Host': 'youtube-search6.p.rapidapi.com'
      }
    };
    setProgress(50);

    let response= await axios.request(options);
    setProgress(70);
    
    // console.log(response.data.videos);
    setVideoResult(response.data.videos);
    setProgress(90);
    setProgress(100);
  }


  // const videoArr = [
  //   {
  //     channel_id: "UC7_YxT-KID8kRbqZo7MyscQ",
  //     description: "Security Breach is HERE!! What horrors lurk in an official free roam Five Nights at Freddy's game? My Comfiest Clothes Yet ► https://cloakbrand.com/ LISTEN TO DISTRACTIBLE ►► https://podlink....",
  //     number_of_views: "3,387,324 views",
  //     published_time: "19 hours ago",
  //     thumbnails: [{
  //       url: "https://i.ytimg.com/vi/ClQ-ymoXJZc/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCdSN-z4EnHRplZlIS4eaPJGgEDEQ",
  //       title: "Five Nights at Freddy's: Security Breach - Part 1"
  //     }],
  //     type: "NORMAL",
  //     title: "Five Nights at Freddy's: Security Breach - Part 1",
  //     video_id: "ClQ-ymoXJZc",
  //     video_length: "54:10"
  //   },
  //   {
  //     channel_id: "UC7_YxT-KID8kRbqZo7MyscQ",
  //     description: "Security Breach is HERE!! What horrors lurk in an official free roam Five Nights at Freddy's game? My Comfiest Clothes Yet ► https://cloakbrand.com/ LISTEN TO DISTRACTIBLE ►► https://podlink....",
  //     number_of_views: "3,387,324 views",
  //     published_time: "19 hours ago",
  //     thumbnails: [{
  //       url: "https://i.ytimg.com/vi/ClQ-ymoXJZc/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCdSN-z4EnHRplZlIS4eaPJGgEDEQ",
  //       title: "Five Nights at Freddy's: Security Breach - Part 1"
  //     }],
  //     type: "NORMAL",
  //     title: "Five Nights at Freddy's: Security Breach - Part 1",
  //     video_id: "ClQ-ymoXJZc",
  //     video_length: "54:10"
  //   },
  // ]

  return (
    <>

      <div className='d-flex flex-column'>
        {videoList.length>0 && videoList.map((v) => {
          const link = `https://www.youtube.com/watch?v=${v.channel_id}`;
          
          return <div className=''><VideoItem v={v} link={link} /></div>
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