import React, { useEffect } from "react";
import { Splide } from "@splidejs/splide"; 
import "@splidejs/splide/dist/css/splide.min.css";

const SplideApp = () => {
  useEffect(() => {
    new Splide("#my-splide", {
      type: "slide",
      perPage: 1,
      autoplay: true,
    }).mount();
  }, []); 

  return (
    <Splide id="my-splide" aria-label="My Favorite Images">
      <div>
        <img src="/img/free-nature-images.jpg" alt="Image 1" />
      </div>
      <div>
        <img src="/img/indir.jfif" alt="Image 2" />
      </div>
    </Splide>
  );
};

export default SplideApp;
