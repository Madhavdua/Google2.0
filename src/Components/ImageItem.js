import React from 'react'

export default function ImageItem(props) {
    let {url}=props;

  return (
    <>
    <img src={url} className=""  style={{width:"23vw", height:'30vh'}} onError={(event) => event.target.style.display = 'none'}  alt='error'></img>
    </>
  )
}
