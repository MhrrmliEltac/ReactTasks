import { useState } from 'react';
import img1 from './img/dice1.png';
import img2 from './img/dice2.png';
import img3 from './img/dice3.png';
import img4 from './img/dice4.png';
import img5 from './img/dice5.png';
import img6 from './img/dice6.png';
import "./dice.css"

const Dice2 = () => {
  const [currentImage, setCurrentImage] = useState(img6);
  const [currentImage1, setTwoCurrentImage] = useState(img1);
  const imagesArray = [img1, img2, img3, img4, img5, img6];

  const changeImage = () => {
    const randomIndex = Math.floor(Math.random() * imagesArray.length);
    const randomIndex2 = Math.floor(Math.random() * imagesArray.length);
    setCurrentImage(imagesArray[randomIndex]);
    setTwoCurrentImage(imagesArray[randomIndex2]);
  };
  

  return (
    <div className='classDice2'>
      <img src={currentImage} alt="Dice2" onClick={changeImage} />
      <img src={currentImage1} alt="Dice1" onClick={changeImage} />
    </div>
  );
};

export default Dice2;
