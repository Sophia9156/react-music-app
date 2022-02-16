import React from 'react';
import styles from './today.module.scss';
import Item from './Item';

export default function Today({todayPlaylist, onPlaylistClick}) {
  return(
    <section className={styles.container}>
      <h2>Today's Playlist</h2>
      <ul>
        {todayPlaylist.map((todayPlaylist, key) => (
          <Item 
          key={key} 
          todayPlaylist={todayPlaylist} 
          onPlaylistClick={onPlaylistClick} 
          />
        )).slice(0,1)}
      </ul>
    </section>
  )
}