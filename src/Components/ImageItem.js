import React from 'react'
import './style.css'

export default function ImageItem(props) {

  let { url } = props;



  return (
    <>

      <div className='imageItem'  >
        <img src={url} className="" id='imageId' onError={(e)=>{e.target.src="https://becomethesolution.com/images/easyblog_articles/2025/instagram-couldnt-load-activity.png"}} alt='error' loading='lazy'></img>

      </div>
    </>
  )
}
