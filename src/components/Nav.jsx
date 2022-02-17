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
        <Link to="/">HOME</Link>
        <Link to="/trending"><b>ON</b> <br/> TRENDING</Link>
        <Link to="/mood"><b>ON</b> <br/> YOUR MOOD</Link>
      </div>
      <button className='burger'>
        MENU
      </button>
    </nav>
  )
}