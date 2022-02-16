import React from 'react';
import Item from '../components/Item';
import styles from './trends.module.scss';

export default function Trends({playlist, onPlaylistClick}) {
  return(
    <main className={styles.container}>
      <h2>Trending Now!</h2>
      <ul>
        {playlist.map((playlist, key) => (
          <Item 
          key={key} 
          playlist={playlist} 
          onPlaylistClick={onPlaylistClick} 
          />
        ))}
      </ul>
    </main>
  )
}