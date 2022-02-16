import React from 'react';
import Greeting from '../components/Greeting';
import Today from '../components/Today';

export default function Home({todayPlaylist, onPlaylistClick}) {
  return(
    <main>
      <Greeting />
      <Today 
      todayPlaylist={todayPlaylist} 
      onPlaylistClick={onPlaylistClick} 
      />
    </main>
  )
}