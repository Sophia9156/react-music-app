import React from 'react';
import Greeting from '../components/Greeting';
import Today from '../components/Today';

export default function Home({video}) {
  return(
    <main>
      <Greeting />
      <Today video={video} />
    </main>
  )
}