import utils from '../index';

const convertImages = async (uploadPhotos) => {
    const { convertImage } = utils;
    const convertedPhotos = await Promise.all(uploadPhotos.map(async (photo) => {
        try {
            const editedPhoto = await convertImage(photo);
            return editedPhoto;
        } catch (conversionError) {
            // Handle the image conversion error
            console.error(`In function convertImages has error: ${conversionError}`);
            // Skip the problematic image or perform any necessary actions
            return null;
        }
    }));
    // because for problem images we return null (line 13)
    return convertedPhotos.filter(photo => photo !== null);
};

export default convertImages;