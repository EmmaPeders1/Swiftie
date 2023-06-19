import React, { useState, useEffect } from 'react';

function Fetcher () {
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
      {
        data && data.length > 0 && data.map((albums) => <p key = {albums.album_id}> {albums.title} ({albums.release_date}) </p>)
      }
    </div>
  );
}

export { Fetcher }