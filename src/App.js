import React, { useState } from 'react';
import Carousel from './components/Carousel/Carousel';
import CircularProgressBar from './components/CircularProgressBar/CircularProgressBar';
import Input from './components/Input/Input';
import Error from './components/Error/Error';
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
      <CircularProgressBar />
    );
  } else if (hasUploadPhotos) {
    content = <Carousel images={ photos } />;
  }

  if (error) {
    content = <Error error={ error } />;
  }

  return (
    <div className={ styles.appContainer }>
      { content }
    </div>
  );
};

export default App;