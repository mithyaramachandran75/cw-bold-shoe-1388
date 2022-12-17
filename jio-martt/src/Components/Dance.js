import React from 'react'
import './dance.css'
import Dancecard from './Dancecard'

const Dance = (props) => {
  return (
    <div className='dance'>
      <h1>New<span>Arrivals</span></h1>
      <p>Shop From Top Categories</p>
      <div className='dancecard3'>
        <Dancecard
         imga={props.item[0].img}
        ></Dancecard>
         <Dancecard
         imga={props.item[1].img}
        ></Dancecard>
         <Dancecard
         imga={props.item[2].img}
        ></Dancecard>
          <Dancecard
         imga={props.item[3].img}
        ></Dancecard>
      </div>
     
     
    </div>
  )
}

export default Dance