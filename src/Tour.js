import React, { useState } from 'react'

const Tour =({id,image,info,price,name})=> {
  //initially readmore is setting false//
  const [readMore, setReadMore] = useState(false);
  return (

    <article className='single-tour'>
      <img src={image} alt={name}/>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        
       {/* readmore is true then show whole text otherwise restrict to 0-200 words */}
        <p>{readMore ? info:`${info.substring(0,200)}.....`}</p>
        <button className='delete-btn'>Not Interested</button>
      </footer>
    </article>
  )
}

export default Tour