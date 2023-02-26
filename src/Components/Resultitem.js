import React from 'react'
import Result from './Result'
export default function Resultitem(props) {
  let {description,title,url} = props;
  return (
    <>
    <div className="card border-0 " >
  <div className="card-body mx-5">
    <p className="card-subtitle mb-2 text-muted">{props.url}</p>
    <h5 className="card-title"><a target={'_blank'} href='url' style={{textDecoration:'none', color:'blue'}}>{title}</a></h5>
    <p className="card-text">{description}</p>
  </div>
</div>
    </>
  )
}
