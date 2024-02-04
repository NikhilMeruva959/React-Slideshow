import React, { useState, useEffect } from 'react';
import './style.css';

export default function ImageCarousel(props) {
  const [startingIndex, setStartingIndex] = useState(props?.index ?? '');
  const [currImg, setCurrImg] = useState(null);

  useEffect(() => {
    setCurrImg(props.images[startingIndex]);
  }, [props.images, startingIndex]);

  function goBack() {
    if (currImg === undefined) {
      console.log('Need to input Dog Breed');
    } else if (startingIndex === 0) {
      setStartingIndex((prevIndex) => props.images.length - 1);
    } else {
      setStartingIndex((prevIndex) => prevIndex - 1);
    }
  }

  function goForward() {
    if (currImg === undefined) {
      console.log('Need to input Dog Breed');
    } else if (startingIndex === props.images.length - 1) {
      setStartingIndex((prevIndex) => 0);
    } else {
      setStartingIndex((prevIndex) => prevIndex + 1);
    }
  }

  return (
    <React.Fragment>
      <div>
        <img src={currImg} alt="no images" width="300" height="300" />
      </div>
      <br />
      <button onClick={goBack}>Go Back</button>
      <button onClick={goForward}>Go Forward</button>
    </React.Fragment>
  );
}
