import React from 'react';
import styles from './player.module.scss';

export default function Player({playlist, playlist: {snippet}}) {
  return(
    <section className={styles.container}>
      <iframe 
      className={styles.video}
      type="text/html" 
      title="youtube video player"
      src={`https://www.youtube.com/embed/${playlist.id.videoId}?autoplay=1`}
      frameBorder="0" 
      allowFullScreen
      ></iframe>
      <article>
        <h2>{snippet.title}</h2>
        <h3>{snippet.channelTitle}</h3>
        <p>{snippet.description}</p>
      </article>
    </section>
  )
}