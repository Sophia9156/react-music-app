import React from 'react';
import styles from './today.module.scss';
import Item from './Item';

export default function Today({video}) {
  return(
    <section className={styles.container}>
      <h2>Today's Playlist</h2>
      <ul>
        {video.map((video, key) => <Item key={key} video={video} />)}
      </ul>
    </section>
  )
}