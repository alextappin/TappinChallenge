import React from 'react'
import AdidasLogo from '../../img/icon-adidas-logo.svg'
import ReebokLogo from '../../img/icon-crosslink-logo-reebok.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = ({
  numberOfProducts
}) => {
  return (
    <div className='header'>
      <div>
        <img className='adidas-logo' src={AdidasLogo}/>
        <div className='links'>
          <div>MEN WOMEN KIDS</div>
          <div>|</div>
          <div>SPORTS BRANDS</div>
          <div>|</div>
          <div>HOLIDAY</div>
        </div>
      </div>
      <div>
        <div className='secondary-header'>
          <div>ALSO VISIT <img className='reebok-logo' src={ReebokLogo}/></div>
          <div>HELP | ORDER TRACKER AND RETURNS | <span className='white'>JOIN CREATORS CLUB</span> | CREATORS CLUB</div>
          <div className='log-in'>LOG IN <FontAwesomeIcon icon={faUser} /></div>
        </div>
        <div className='search-bag-section'>
          <span className='search-icon'><FontAwesomeIcon icon={faSearch} /></span>
          <input type="text" placeholder='Search'/>
          <button>
            <FontAwesomeIcon icon={faShoppingBag} /> <span>{numberOfProducts}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header