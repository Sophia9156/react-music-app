import React from 'react';
import { Link } from 'react-router-dom';

export default function Item({todayPlaylist, todayPlaylist: {snippet}, onPlaylistClick}) {
  return(
    <Link to='/play'>
      <li onClick={() => onPlaylistClick(todayPlaylist)}>
        <figure>
          <img src={snippet.thumbnails.high.url} alt="thumbnail" />
        </figure>
        <p>{snippet.title}</p>
        <p>{snippet.channelTitle}</p>
      </li>
    </Link>
  )
}