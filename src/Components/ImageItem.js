import React from 'react'

export default function ImageItem(props) {
    let {url}=props;

  return (
    <>
    <img src={url} className=""  style={{width:"23vw", maxHeight:'50vh'}} onError={(event) => event.target.style.display = 'none'}  ></img>
    </>
  )
}
