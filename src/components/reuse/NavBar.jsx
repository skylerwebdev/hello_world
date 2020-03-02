 
import React, { useState, useEffect } from 'react';
import { NavLink as NL } from 'react-router-dom';
import '../../styles/Nav.css';
const NavBar = () => {
  const width = window.innerWidth;
  const [open, setOpen] = useState(false)
  const showNav = () => {
    if (open === true) {
      setOpen(false);
    } if (open === false) {
      setOpen(true);
    }
  };

  return (
    <div className={open && width < 768 ? 'mnNav full' : 'mnNav'}>
      <div className='navLt'>
          <span className='open' onClick={showNav}>
          </span>
      </div>
        <div className={!open || width > 768 ? 'navCt hidden' : 'navCt'}></div>
        <div className={!open ||  width > 768 ? 'navRt hidden' : 'navRt'}>
      <NL className='link nl' exact to='/'>
        Home
      </NL>
      <NL className='link nl' to='/about'>
        About
      </NL>
      <NL className='link nl' to='/contact'>Contact</NL>
      </div>
    </div>
  );
};

export default NavBar;

