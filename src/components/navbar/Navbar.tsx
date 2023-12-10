import React from 'react'
import './Navbar.css';
import logo from '../../assets/logo-color.svg';

function Navbar() {
  return (
   <>
    <nav className="navbar">
       <img src={logo} alt="money-mingle logo"/>
       <div>
            <button className="navbar_button">
                <span>EUR - USD Details</span>
            </button>
            <button role={'button'} onClick={()=>console.log('adssa')} className="navbar_button">
            <span>EUR - GBP Details</span>
            </button>
       </div>
    </nav>
   
   </>
  )
}

export default Navbar
