import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
import ImageCarousel from './ImageCarousel';

// npm install axios@0.26.1

export default function Search() {
  const [userSearch, setUserSearch] = useState('');
  const [imageArr, setImageArr] = useState([]);

  const fetchNewData = () => {
    axios
      .get(`https://dog.ceo/api/breed/${userSearch}/images`)
      .then((res) => {
        console.log(res.data.message);
        setImageArr(res.data.message);
      })
      .catch((err) => {
        // console.log(err);
        console.log('Hiii from err');
        setImageArr([]);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur
    console.log(userSearch);
    fetchNewData();
    setUserSearch('');
  };
  return (
    <React.Fragment>
      <div>
        <form onSubmit={handleSubmit}>
          Dog Breed Name:
          <input
            type="text"
            value={userSearch}
            onChange={(e) => setUserSearch(e.target.value)}
          />
          <input type="submit" />
        </form>
        <br></br>
        <br></br>
        <ImageCarousel images={imageArr} index={0} />
      </div>
    </React.Fragment>
  );
}
