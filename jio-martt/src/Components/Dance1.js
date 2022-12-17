import React from 'react'
import './dance.css'
import Dancecard from './Dancecard'
function dance1(props) {
  return (
    <div className='dance'>
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

export default dance1