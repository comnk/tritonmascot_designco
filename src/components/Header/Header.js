import React from 'react'
import './Header.css';
import logo from '../../images/logo.webp';


function Header() {
  return (
    <div className='header'>
      <h1>UCSD Triton Fan Page</h1>
      <img src={logo} className="logo" alt="triton mascot logo"/>
    </div>
  )
}

export default Header