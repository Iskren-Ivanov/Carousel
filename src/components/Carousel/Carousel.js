import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Error from '../Error/Error';

import utils from "../../utils/index";
import styles from "./Carousel.module.css";

const Carousel = ({ images }) => {
  const { executeScroll } = utils;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);

  const handleWheel = ({ deltaY }) => {
    try {
      const index = executeScroll(deltaY, currentIndex, images.length - 1);
      setCurrentIndex(index);
    } catch (error) {
      setError(`[Carousel] In function handleWheel has error: ${error}`);
    }
  };

  let content = (
    <div className={ styles.carousel } onWheel={ handleWheel }>
      <LazyLoadImage
        className={ styles.carousel_background }
        src={ images[currentIndex].url }
        effect="blur"
      />
    </div>
  );

  if (error) {
    content = <Error error={ error } />;
  }

  return content;
};

export default Carousel;