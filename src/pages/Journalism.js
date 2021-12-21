import React from 'react';
import JournalismCards from '../components/JournalismCards';
import './PageStyles/Journalism.css';

export default function Journalism() {
  return (
    <div className="journalism">
      <div>
        <h1>Journalism</h1>
        <h2>YouTube</h2>
        <p>
          I have covered local events in SoCal since I was eleven years old. Some
          of the stories I've reported on included the 2016 election, a hotel
          workers strike in San Francisco, and a train-versus-pedestrian
          accident. My latest video can be found below.
        </p>
        <p>I have also included all of my news reports into <a href="https://www.youtube.com/playlist?list=PLYet4GN1cujTTZx7V972d-huyzw-jmnyr">this</a> playlist.</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/bruBCwsGi9o"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
       <p>I also recently started a Substack with plans for a newsletter in the future. Check it out below:</p>
       <iframe src="https://jordanpagkalinawan.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>
      </div>
      <JournalismCards />
      <img id="journo-image" src="https://c0.wallpaperflare.com/preview/639/306/330/aerial-background-blog-cafe.jpg" />
    </div>
  );
}
