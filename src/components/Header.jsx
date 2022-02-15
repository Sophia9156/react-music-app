import React from 'react';
import { Link } from 'react-router-dom';

import Nav from './Nav';

export default function Header() {
  return(
    <header>
      <Link to="/">
        <h1>
          <img src='./images/logo.png' alt="MoodPly" />
          <b>
            <span className='logo2'>Ply</span>
            <span className='logo1'>Mood</span>
          </b>
        </h1>
      </Link>
      <Nav />
    </header>
  )
}