import React from 'react'
export default function Resultitem(props) {
  let { description, title, url } = props;
  return (
    <>
      <div className="card border-0 " >
        <div className="card-body">
          <p className="card-subtitle  text-muted">{url}</p>
          <h5 className="card-title"><a target='_blank' href={url} style={{ textDecoration: 'none', color: 'blue' }}>{title}</a></h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </>
  )
}
