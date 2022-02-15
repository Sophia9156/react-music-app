import React from 'react';
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
        <p>잘하고 있어요, 이미</p>
        <p>잠시 쉬었다 가요</p>
        <p>행복은 하늘을 올려다 보는 것</p>
        <p>음악으로 기분전환 해봐요</p>
        <p>오늘 내 기분에 어울리는 음악은?</p>
      </div>
    </section>
  )
}