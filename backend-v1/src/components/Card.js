import React from 'react';

const Card = ({songUrl, imageUrl, songName}) => {
  
    return (
      <>
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <h3>{songName}</h3>
            <audio controls>
                <source 
                src={songUrl}
                type="audio/mp3"/>
            </audio>
            <br/>
            <img src={imageUrl} alt='singer name'/>
        </div>    
      </>
      
    );
  }
  
  export default Card;