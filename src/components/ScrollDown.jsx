import React from 'react';
import styles from './scrolldown.module.scss';

export default function ScrollDown() {
  return(
    <aside className={styles.scroll}>
      <div className={styles.arrow}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </aside>
  )
}