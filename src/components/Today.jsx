import React from 'react';
import styles from './today.module.scss';
import Item from './Item';

export default function Today({playlist, onPlaylistClick}) {
  return(
    <section className={styles.container}>
      <h2>Today's Playlist</h2>
      <ul>
        {playlist.map((playlist, key) => (
          <Item 
          key={key} 
          playlist={playlist} 
          onPlaylistClick={onPlaylistClick} 
          />
        )).slice(0,1)}
      </ul>
    </section>
  )
}