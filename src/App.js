import React, { useState } from 'react';
import Carousel from './components/Carousel/Carousel';
import CircularProgressBar from './components/CircularProgressBar/CircularProgressBar';
import Input from './components/Input/Input';
import styles from './App.module.css';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const hasUploadPhotos = photos.length > 0;

  let content = (
    <Input setImg={ setPhotos } setIsLoading={ setIsLoading } setError={ setError } />
  );

  if (isLoading) {
    content = (
      <div className={ styles.progressBarContainer }>
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
