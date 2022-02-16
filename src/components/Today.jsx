import React from 'react';
import styles from './today.module.scss';
import Item from './Item';

export default function Today({todayPlaylist}) {
  return(
    <section className={styles.container}>
      <h2>Today's Playlist</h2>
      <ul>
        {todayPlaylist.map((todayPlaylist, key) => (
          <Item key={key} todayPlaylist={todayPlaylist} />
        ))}
      </ul>
    </section>
  )
}