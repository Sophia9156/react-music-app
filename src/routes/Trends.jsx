import React from 'react';
import Item from '../components/Item';
import styles from './trends.module.scss';

export default function Trends({todayPlaylist, onPlaylistClick}) {
  return(
    <main className={styles.container}>
      <h2>Trending Now!</h2>
      <ul>
        {todayPlaylist.map((todayPlaylist, key) => (
          <Item 
          key={key} 
          todayPlaylist={todayPlaylist} 
          onPlaylistClick={onPlaylistClick} 
          />
        ))}
      </ul>
    </main>
  )
}