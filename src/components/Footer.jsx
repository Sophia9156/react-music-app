import React from 'react';

export default function Footer() {
  const date = new Date();
  return(
    <footer>
      <span>&copy; {date.getFullYear()} Sophia. All rights reserved. </span> 
    </footer>
  )
}