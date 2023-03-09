import React from 'react'

export default function ImageItem(props) {
    let {url}=props;
  return (
    <>
    <img src={url} className=""  style={{maxWidth:"25vw", maxHeight:'50vh'}} alt="Error"></img>
    </>
  )
}
