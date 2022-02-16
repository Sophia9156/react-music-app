import React from 'react';

export default function Footer() {
  const date = new Date();
  return(
    <footer>
      <span>MoodPly &copy; {date.getFullYear()} Created by Sophia. All rights reserved. </span> 
    </footer>
  )
}