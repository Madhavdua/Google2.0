import React from 'react'
import { useState, useEffect } from 'react';
import ImageItem from './ImageItem';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
export default function Image(props) {

  // let data=[
  //   { by:"https://unsplash.com/plus?referrer=%2Fphotos%2FEENk9naO_zk",
  //   id: "de00a463-3520-41nc5-b666-0f58674f7f3c",
  //   image:"https://plus.unsplash.com/premium_photo-1671751034172-a3974a82ed97?ixlib=rb-4.0.3&,ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  //   source:"https://unsplash.com"
  // },
  // { by:"https://unsplash.com/plus?referrer=%2Fphotos%2FEENk9naO_zk",
  // id: "de00a463-3520-41c5-bsdnsds6-0dvf58674f7f3c",
  // image:"https://plus.unsplash.com/premium_photo-1671751034172-a3974a82ed97?ixlib=rb-4.0.3&,ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  // source:"https://unsplash.com"
  // },
  // { by:"https://unsplash.com/plus?referrer=%2Fphotos%2FEENk9naO_zk",
  // id: "de00asndfsdfs63-3520-41c5-b666-0f58674f7f3c",
  // image:"https://plus.unsplash.com/premium_photo-1671751034172-a3974a82ed97?ixlib=rb-4.0.3&,ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  // source:"https://unsplash.com"
  // },
  // { by:"https://unsplash.com/plus?referrer=%2Fphotos%2FEENk9naO_zk",
  // id: "dghffhf00a463-3520-41c5-b666-0f58674f7f3c",
  // image:"https://plus.unsplash.com/premium_photo-1671751034172-a3974a82ed97?ixlib=rb-4.0.3&,ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  // source:"https://unsplash.com"
  // },
  // { by:"https://unsplash.com/plus?referrer=%2Fphotos%2FEENk9naO_zk",
  // id: "dghfhf00a46f3-3520-41c5-b666-0f5sdf7f3c",
  // image:"https://plus.unsplash.com/premium_photo-1671751034172-a3974a82ed97?ixlib=rb-4.0.3&,ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  // source:"https://unsplash.com"
  // },
  // { by:"https://unsplash.com/plus?referrer=%2Fphotos%2FEENk9naO_zk",
  // id: "dghfhf00a463-3520-41c5-bs666-0f5sdf7f3c",
  // image:"https://plus.unsplash.com/premium_photo-1671751034172-a3974a82ed97?ixlib=rb-4.0.3&,ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  // source:"https://unsplash.com"
  // },
  // { by:"https://unsplash.com/plus?referrer=%2Fphotos%2FEENk9naO_zk",
  // id: "dghfhf00a463-3520-41c5-db666-0f5sdf7f3c",
  // image:"https://plus.unsplash.com/premium_photo-1671751034172-a3974a82ed97?ixlib=rb-4.0.3&,ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  // source:"https://unsplash.com"
  // },
  // ]
  const [result, setresult] = useState([]);

// for infi scroll
  // const [part, setpart] = useState([]);
  // console.log(part)

  useEffect(() => {

    bringData();
    props.setProgress(20);
  }, [props.searchItem]);
  
  
  
  const bringData = async () => {
    const options = await {
      method: 'GET',
      url: 'https://joj-image-search.p.rapidapi.com/v2/',
      params: { q: `${props.searchItem}`, hl: 'en' },
      headers: {
        'X-RapidAPI-Key': `${props.apiKey}`,
        'X-RapidAPI-Host': 'joj-image-search.p.rapidapi.com'
      }
    };
    props.setProgress(50);
    axios.request(options).then(function (response) {
      // console.log(response.data.response.images);
      props.setProgress(70);
      props.setProgress(80);
      setresult(response.data.response.images);
      // setpart([]);
      // setting part
      // setpart(part.concat(result.slice(0, 20)));

      props.setProgress(100);
    }).catch(error => {
      console.log(error.response.status)
      if (error.response.status != 200) {
        alert('image api limit reached')
      }
    })
  }

  // code for infinite scroll
  // let index = 20;
  // const gap = 10;
  // const [hasMore, sethasMore] = useState(true);
  // const fetchData = () => {
  //   if (part.length >= result.length) { sethasMore(false); return; }
  //   setTimeout(() => {

  //     setpart(part.concat(result.slice(index, index + gap)));
  //     index += gap;
  //     console.log("i am result      ",result)
  //   }, 500);
  // }


  return (
    <>
    {/*<div className='mx-1'>

       <InfiniteScroll
        dataLength={part.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      className='d-flex flex-wrap' id="maps">
        {
          part.map(element => {
            return <div key={element.image.url} className="mx-1">
              <ImageItem url={element.image.url}></ImageItem>
            </div>
            
          })
        }
      </InfiniteScroll>
    </div> */}


      <div className='d-flex flex-wrap mx-2'>
          {
            result.map((element) => {
              return <div key={result.indexOf(element)} className="p-1 d-flex flex-wrap ">
                <ImageItem url={element.image.url}></ImageItem>
              </div>
            })
          }

        </div>


      {/* for trying below */}
      {/* <div className="mx-2 d-flex flex-wrap">

    {
    data.map(element=>{
      return <div key={data.indexOf(element)} className="p-1">
               <ImageItem url={element.image}></ImageItem>
            </div>
    })
    }
    </div> */}
    </>
  )
}
