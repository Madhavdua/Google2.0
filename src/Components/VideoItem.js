import React from 'react'

function VideoItem(props) {
    const { v, link } = props;
    return (
        <>

            <div className='' >
                <a href={link} target='blank' style={{ textDecoration: "none" }}>
                    <div className='mx-1 my-2' style={{ color: "blue" }}>
                        <div className='text-dark ' style={{ fontSize: "smaller" }}>
                            {link.slice(0, 20)}....
                        </div>
                        <div className='fs-5' style={{ fontWeight: "500" }}>
                            {v.title.slice(0, 70)}
                            <br></br>
                            {v.title.slice(70, 90)}{v.title.length > 90 && "..."}
                        </div>
                    </div>

                </a>
                <div className="card mb-3" style={{ maxWidth: "540px", border: "none" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <a href={link} target='_blank' style={{ textDecoration: "none" }}>

                                <img src={v.thumbnails[0].url} style={{ maxWidth: "90vw" }} className="card-img rounded-start" alt="..." />
                            </a>

                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                {v.descriptionSnippet!=null && <p className="card-text" style={{ fontSize: "smaller" }}>{v.descriptionSnippet.slice(0, 80)}...</p>}
                                <p className="card-text"><small className="text-body-secondary">{v.
                                    publishedTimeText
                                }</small></p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default VideoItem