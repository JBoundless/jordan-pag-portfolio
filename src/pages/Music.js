import React from 'react';
import './PageStyles/Music.css';

export default function Music() {
  return (
    <div className="Music">
      <h1>Music</h1>
      <p>
        I've been a musician my entire life. I've been involved in choirs for
        school and church, and I took a Music 1 class in my sophomore year of
        high school. I've been taught by several vocal coaches since I was nine.
        I was even featured as an ensemble singer for the{' '}
        <a href="https://fasofoundation.org/">
          Filipino American Symphony Orchestra
        </a>
        . I also learned how to play the piano, guitar, and drums.
      </p>
      <h2>SoundCloud & Spotify</h2>
      <p>
        My <a href="https://soundcloud.com/jordan-boundless">SoundCloud</a>{' '}
        includes recordings of covers I've sang, mixes of Broadway songs, and
        several{' '}
        <a href="https://www.theverge.com/2020/4/20/21222294/lofi-chillhop-youtube-productivity-community-views-subscribers">
          Lo-Fi
        </a>{' '}
        tracks I produced. My{' '}
        <a href="https://open.spotify.com/user/21dep67i3jzh66dmrbi2br7by">
          Spotify
        </a>{' '}
        contains playlists of my favorite songs from different genres, from Jazz
        to Musical Theater.
      </p>
      <img id="dear-evan-hansen" src="https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/WrHBDKHNUmNZz1kvelRt-RINmuk=/1660x934/smart/filters:no_upscale()/arc-anglerfish-arc2-prod-dmn.s3.amazonaws.com/public/QF5GXYK6QFCKRHBMLYZF6GT6AA.JPG" />
    </div>
  );
}
