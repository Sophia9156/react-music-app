import React from 'react';
import Greeting from '../components/Greeting';
import Today from '../components/Today';

export default function Home() {
  return(
    <main>
      <Greeting />
      <Today />
    </main>
  )
}