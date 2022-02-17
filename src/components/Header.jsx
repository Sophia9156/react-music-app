import React from 'react';
import { Link } from 'react-router-dom';

import Nav from './Nav';

export default function Header() {
  return(
    <header>
      <Link to="/">
        <h1>
          <img src='./images/logo-txt.png' alt="MoodPly" />
        </h1>
      </Link>
      <Nav />
    </header>
  )
}