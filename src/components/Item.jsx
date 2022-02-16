import React from 'react';
import { Link } from 'react-router-dom';

export default function Item({todayPlaylist: {snippet}}) {
  return(
    <Link to='/play'>
      <li>
        <figure>
          <img src={snippet.thumbnails.high.url} alt="thumbnail" />
        </figure>
        <p>{snippet.title}</p>
        <p>{snippet.channelTitle}</p>
      </li>
    </Link>
  )
}