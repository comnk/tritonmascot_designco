import React from 'react';
import { useState } from 'react';
import './NavLink.css';

const NavLink = ({ children }) => {
    const [data, setData] = useState('');


    const onClick = () => {
        console.log("clicked");
      };

    return (
        <div className="container">
            <button className='openModal' onClick={onClick}>
                {children}
            </button>
            <dialog className="modal">
                <p>Modal content of your choice. Click the below button or press the escape key to close this.</p>
                <button className="closeModal">Close this modal</button>
            </dialog>
        </div>
    );
  };
  
  export default NavLink;