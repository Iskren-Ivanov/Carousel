import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
      setError("Error occurred during scrolling.");
      console.error("[handleWheel] Error:", error);
    }
  };

  let content;
  if (error) {
    content = <div className={styles.error}>{error}</div>;
  } else {
    content = (
      <div className={styles.carousel} onWheel={handleWheel}>
        <LazyLoadImage
          className={styles.carousel_background}
          src={images[currentIndex].url}
          effect="blur"
        />
      </div>
    );
  }

  return content;
};

export default Carousel;
