import React from 'react'

export default function ImageItem(props) {
  let { url } = props;
  const style={
    backgroundImage : "url(" + `${props.lazyBgUrl}` + ")",
    width:"auto",
    height:"auto",
    backgroundSize:"cover",
  }
  const imgRef=document.getElementsByTagName("image");
  


  return (
    <>

    <div id='image' style={style} >
      <img src={url} className="" style={{ width: "100%", height: '30vh',filter:"none" }} onError={(event) => event.target.style.display = 'none'} alt='error' loading='lazy'></img>

    </div>
    </>
  )
}
