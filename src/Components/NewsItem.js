import React from 'react'
import nbg from './newsbg.jpg'
import './style.css'
function NewsItem(props) {
    const {element}=props;
    const title=element.Title;
    const titleLen=Math.min(50,title.length);
    return (
        <>
            {element && element.Image && 
            <>
            <div className="card news-item mx-2 my-2">
                <img src={element.Image} className="card-img" alt="..." 
                onError={(e)=>{e.target.src=nbg }} 
                />
                <div className="card-img-overlay" style={{top:"auto"}}>
                    {/* <h5 className="card-title">title</h5> */}
                    <p className="card-text news-title">{title.substring(0,titleLen)}....</p>
                </div>
            </div>
            {/* <div className='news-date'>
                    <p className="card-text " style={{textAlign:"end"}}><small>{element.PublishedOn.substring(0,10)}</small></p>
            </div> */}
            
            </>
            }
        </>
    )
}

export default NewsItem