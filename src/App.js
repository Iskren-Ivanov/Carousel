import React, { useState } from 'react';
import Carousel from './components/Carousel/Carousel';
import CircularProgressBar from './components/CircularProgressBar/CircularProgressBar';
import utils from './utils/index';

import styles from './App.module.css';

const App = () => {
  const { convertImages, fileUpload } = utils;

  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = async (event) => {
    setIsLoading(true);
    try {
      const uploadedPhotos = await fileUpload(event);
      // Converting high quality photos 5-6 megabytes becomes very slow for 50-60 photos takes 50 seconds...
      console.log(new Date(), '-------start--------')
      const convertedPhotos = await convertImages(uploadedPhotos);
      console.log(new Date(), '-------end -------')
      setPhotos(convertedPhotos);
    } catch (error) {
      setError('Error occurred during image conversion.');
      console.error('[handleChange] Error:', error);
    }
    setIsLoading(false);
  };

  const hasUploadPhotos = photos.length > 0;

  let content = (
    <div className={ styles.inputContainer }>
      <input type="file" accept="image/jpeg, image/png, image/jpg" multiple onChange={ handleChange } />
    </div>
  );

  if (isLoading) {
    content = (
      <div className={styles.progressBarContainer}>
      <div className={ styles.progress }>
        <CircularProgressBar />
      </div>
      <div>
      Now is the best time to make a coup of coffee
      </div>
      </div>
    );
  } else if (hasUploadPhotos) {
    content = <Carousel images={ photos } />;
  } else if (error) {
    content = (
      <div className={ styles.error }>
        { error }
      </div>
    );
  }

  return (
    <div className={ styles.appContainer }>
      { content }
    </div>
  );
};

export default App;
