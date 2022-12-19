import React from 'react'
import './dancecard.css'

const Dancecard = (props) => {
  return (
    <div>
       <section className='selection category'>
        <div className='cat-center'>
          <div className='cat'>
            <img src={props.imga} alt="" />
          </div>  
        </div>
       </section>
    </div>
  )
}

export default Dancecard