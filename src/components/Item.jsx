import React from 'react';

export default function Today({video, video: {snippet}}) {
  return(
    <li>
      <figure>
        <img src={video.snippet.thumbnails.high.url} alt="thumbnail" />
      </figure>
      <p>{snippet.title}</p>
      <p>{snippet.channelTitle}</p>
    </li>
  )
}