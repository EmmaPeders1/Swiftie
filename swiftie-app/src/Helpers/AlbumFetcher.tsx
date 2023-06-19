import React, { useState, useEffect } from 'react';
import InfoCard from '../Components/InfoCard/InfoCard';
import Button from '../Components/Button/Button';

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
      <div className="album-container">
        {
          data && data.length > 0 && data.map(
            (albums) => <Button
              id={albums.album_id}
              label={albums.title}/>
          )
        }
      </div>
    </div>
  );
}

export { Fetcher }