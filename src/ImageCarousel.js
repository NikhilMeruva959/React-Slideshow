import React, { useState, useEffect } from 'react';
import './style.css';

// let startingIndex = 1;
export default function ImageCarousel(props) {
  const [startingIndex, setStartingIndex] = useState(null);
  const [currImg, setCurrImg] = useState(null);

  useEffect(() => {
    setCurrImg(props.images[startingIndex]);
  }, [props, startingIndex]);
  useEffect(() => {
    setStartingIndex(props.index);
  }, [props.images]);

  function goBack() {
    if (startingIndex === 0) setStartingIndex(props.images.length - 1);
    else setStartingIndex(startingIndex - 1);
    console.log(startingIndex);
    setCurrImg(currImg[startingIndex]);
  }
  function goFoward() {
    if (startingIndex === props.images.length - 1) setStartingIndex(0);
    else setStartingIndex(startingIndex + 1);
    console.log(startingIndex);
    setCurrImg(currImg[startingIndex]);
  }

  // function goBack() {
  //   if (startingIndex === 0) startingIndex = props.images.length - 1;
  //   else startingIndex = startingIndex - 1;
  //   console.log(startingIndex);
  //   setCurrImg(props.images[startingIndex]);
  // }
  // function goFoward() {
  //   if (startingIndex === props.images.length - 1) startingIndex = 0;
  //   else startingIndex = startingIndex + 1;
  //   console.log(startingIndex);
  //   setCurrImg(props.images[startingIndex]);
  // }

  return (
    <React.Fragment>
      <div>
        <img src={currImg} alt="no images" width="300" height="300" />
      </div>
      <br></br>
      <button onClick={goBack}>Go Back</button>
      <button onClick={goFoward}>Go Foward</button>
    </React.Fragment>
  );
}
