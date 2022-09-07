import React from 'react';
import Card from './Card';

const CardList = ({ data }) => {
  return (
    <div>
      {
        data.map((user, i) => {
          return (
            <Card
              key={i}
              songUrl={data[i].previewUrl}
              imageUrl={data[i].artworkUrl100}
              songName={data[i].collectionCensoredName}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;