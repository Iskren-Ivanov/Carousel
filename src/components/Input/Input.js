import React from 'react';
import utils from '../../utils/index'
import styles from './Input.module.css';

const Input = ({ setImg, setIsLoading, setError }) => {
    const { convertImages, fileUpload } = utils;

    const handleChange = async (event) => {
        setIsLoading(true);
        try {
            const uploadedPhotos = await fileUpload(event);
            const convertedPhotos = await convertImages(uploadedPhotos);
            convertedPhotos && setImg(convertedPhotos);
        } catch (error) {
            setError('Error occurred during image conversion.');
            console.error('[handleChange] Error:', error);
        }
        setIsLoading(false);
    };

    return (
        <div className={ styles.inputContainer }>
            <input type="file" accept="image/jpeg, image/png, image/jpg" multiple onChange={ handleChange } />
        </div>
    )
};

export default Input;