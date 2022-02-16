import React, { memo } from 'react';
import Item from '../components/Item';
import styles from './mood.module.scss';

const Mood = memo(({onSelect, playlist, onPlaylistClick}) => {
  const moods = ['신나는', '운동할 때', '드라이브', '혼자 조용히', '독서시간', '노동요', '와인과 함께'];
  const handleSelect = (e) => {
    onSelect(`${e.target.innerText} 플레이리스트`);
  }

  return(
    <main className={styles.container}>
      <h2>What's your Mood?</h2>
      <ul className={styles.moodType}>
        {moods.map((mood, key) => (
          <button key={key} onClick={handleSelect}>{mood}</button>
        ))}
      </ul>
      <ul className={styles.playlists}>
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
})

export default Mood