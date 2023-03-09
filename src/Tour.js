import React,{useState} from 'react'
import './App.css';
const Tour = ({id,image,info,price,name,removeTour}) => {

  const[readMore,setReadMore]=useState(false)
  return <article className='article-gride'>
    <img src={image} alt={image}/>
    <footer>
      <div className='articl'>
        <h4>{name}</h4>
        <h4>${price}</h4>
      </div>
        <p>{readMore?info:`${info.substring(0,200)}...`}</p>
        <button onClick={()=>setReadMore(!readMore)}>{readMore?'show less':'read more'}</button>
        
    </footer>
     
    <button className='btn' onClick={()=>removeTour(id)}>no Interested</button>
  </article>
  
}

export default Tour