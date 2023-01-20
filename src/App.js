import * as React from 'react';
import './style.css';
import Search from './Search';
import ImageCarousel from './ImageCarousel';

let imageData = [
  'https://images.dog.ceo/breeds/pitbull/20190710_143021.jpg',
  'https://images.dog.ceo/breeds/pitbull/20190801_154956.jpg',
  'https://images.dog.ceo/breeds/pitbull/IMG_20190826_121528_876.jpg',
];

let dogApi = 'https://dog.ceo/api/breed/hound/images';

export default function App() {
  return (
    <div>
      <Search />
      {/* <ImageCarousel images={imageData} /> */}
    </div>
  );
}
