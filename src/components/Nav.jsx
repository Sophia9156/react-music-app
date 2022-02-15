import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const[ openMenu, setOpenMenu ] = useState(false);
  function clickMenu() {
    setOpenMenu(openMenu => !openMenu)
  }
  return(
    <nav onClick={clickMenu}>
      <div className={`navigation ${!openMenu ? "hide" : null}`}>
        <Link to="/">TODAY's</Link>
        <Link to="/trending">TRENDING</Link>
        <Link to="/mood">ON MOOD</Link>
      </div>
      <button className='burger'>
        MENU
      </button>
    </nav>
  )
}