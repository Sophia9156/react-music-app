import React from 'react';
import Greeting from '../components/Greeting';
import Today from '../components/Today';

export default function Home({playlist, onPlaylistClick}) {
  return(
    <main>
      <Greeting />
      <Today 
      playlist={playlist} 
      onPlaylistClick={onPlaylistClick} 
      />
    </main>
  )
}