import React from 'react';
import ScrollDown from '../components/ScrollDown';
import styles from './greeting.module.scss';

export default function Greeting() {
  return(
    <section className={styles.visual}>
      <figure>
        <img className={styles.visual1} src='./images/visual1.jpg' alt="bg" />
        <img className={styles.visual2} src='./images/visual1.jpg' alt="bg" />
      </figure>
      <div className={styles.textBox}>
        <p>오늘 기분 어때요?</p>
        <p>뮤직 플레이리스트로 기분전환 해봐요</p>
        <p>오늘 내 기분에 어울리는 플레이리스트는?</p>
        <p>좋아하는 플레이리스트를 찾아보세요</p>
        <p>잠시 쉬었다 가요</p>
        <p>음악은 최고의 인테리어</p>
      </div>
      <ScrollDown />
    </section>
  )
}