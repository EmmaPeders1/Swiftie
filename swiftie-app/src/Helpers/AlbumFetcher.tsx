import React, { useState, useEffect, } from 'react';
import './AlbumFetcher.css';
import { NavLink } from 'react-router-dom';


function AlbumFetcher () {

  const [data = [
    {
      album_id: "album_id",
      title: "title",
      release_date: "release_date"
    }
  ], setData] = useState([]);
  const getData = () => {
    fetch('https://taylor-swift-api.sarbo.workers.dev/albums')
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
      <h1>Check out her discography:</h1>
      <div className="album-container">
        {
          data && data.length > 0 && data.map(
            (albums) =>
            <div className='navlink-div'>
              <NavLink
              key={albums.album_id}
              id="navlink"
              to={`/${(albums.title).replace(/\s/g, "")}`}> {albums.title}</NavLink>
            </div>
          )
        }
      </div>
    </div>
  );
}

export { AlbumFetcher }