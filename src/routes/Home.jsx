import React from 'react';
import Greeting from '../components/Greeting';
import Today from '../components/Today';

export default function Home({todayPlaylist}) {
  return(
    <main>
      <Greeting />
      <Today todayPlaylist={todayPlaylist} />
    </main>
  )
}