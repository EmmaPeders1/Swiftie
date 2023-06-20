import React, { useState, useEffect, } from 'react';
import './Fetcher.css';
import { NavLink } from 'react-router-dom';

function SongFetcher () {

  const [data = [
    {
      song_id: "song_id",
      title: "title",
      album_id: "album_id"
    }
  ], setData] = useState([]);
  const getData = () => {
  fetch(`https://taylor-swift-api.sarbo.workers.dev/albums/1`)
  //fetch(`https://taylor-swift-api.sarbo.workers.dev/albums/${albums.album_id}`)
      .then(function(response){
        return response.json();
      })
      .then(function(myJson){
        setData(myJson)
      });
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className='App'>
      <h1>Songs in <i>1989</i>:</h1>
      <div className="song-container">
        {
          data && data.length > 0 && data.map(
            (songs) =>
            <div className='navlink-div'>
              <NavLink
              key={songs.song_id}
              id="navlink"
              to={`/${(songs.title).replace(/\s/g, "")}`}>
              {songs.title}
              </NavLink>
            </div>
          )
        }
      </div>
    </div>
  );
}

export { SongFetcher }