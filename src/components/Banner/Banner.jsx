import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarSide } from '@fortawesome/free-solid-svg-icons'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner'>
      <div>UP TO 65% OFF - USE CODE: CYBER</div>
      <div><FontAwesomeIcon icon={faCarSide}/> FREE SHIPPING OVER $49 AND FREE RETURNS</div>
      <div><FontAwesomeIcon icon={faIdCard}/> JOIN THE ADIDAS CREATORS CLUB</div>
    </div>
  )
}

export default Banner