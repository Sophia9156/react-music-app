import React from 'react';
import { Link } from 'react-router-dom';

export default function Item({playlist, playlist: {snippet}, onPlaylistClick}) {
  return(
    <Link to='/play'>
      <li onClick={() => onPlaylistClick(playlist)}>
        <figure>
          <img src={snippet.thumbnails.high.url} alt="thumbnail" />
        </figure>
        <p>{snippet.title.slice(0,40)}</p>
        <p>{snippet.channelTitle}</p>
      </li>
    </Link>
  )
}