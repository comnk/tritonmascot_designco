import React from 'react'
import './NavLink.css';


const NavLink = ({ children }) => {
    return (
      <button className='button'>
        {children}
      </button>
    );
  };
  
  export default NavLink;