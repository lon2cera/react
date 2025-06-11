import React, { useState } from 'react';

const images = [
  "https://via.placeholder.com/300",
  "https://picsum.photos/300",
  "https://placeimg.com/300/300/any",
  "https://source.unsplash.com/random/300x300",
  "https://dummyimage.com/300",
  "https://loremflickr.com/300/300",
  "https://loremflickr.com/320/240",
  "https://www.fillmurray.com/300/300",
  "https://www.placecage.com/300/300",
  "https://www.stevensegallery.com/300/300"
];

const Gallery = () => {
  const [src, setSrc]=useState(0);
  // const move=(e)=>{
  //   const type=e.target.name;
  //   if (type==='<'&&src>0) {
  //     setSrc(prev=>prev-1)
  //   }else if(type==='>'&&src<10){
  //     setSrc(prev=>prev+1)
  //   }    
  //   console.log(prev);
    
  // }
  
  const next=()=>{
    src===images.length-1?setSrc(0):setSrc(src+1)
    // setSrc(prev=>prev+1)
    // console.log(src);
    
  }
  const back=()=>{
    // if(src>=0&&src<10){
    src===0?setSrc(images.length-1):setSrc(src-1);
      // console.log(src);
    // }
  }

  return (
    <div>
      <h2>갤러리</h2>
      <div>
        <button onClick={back}>이전</button>
        <img src={images[src]} alt="" />
        <button onClick={next}>다음</button>
      </div>
    </div>
  );
};

export default Gallery;