const images = []; // Array to store the relative path to the imported images

const importImages = (imagesFolderContents) => {
    imagesFolderContents.keys().forEach((name) => {
        // Creating an image object to halpe us to create the relative path
        const image = new Image();
        image.src = imagesFolderContents(name); // Created relative path 
        images.push(image);
    });
};
// Import all images|jpeg|svg from the current folder
importImages(require.context('../../images', false, /\.(png|jpe?g|svg)$/));

export default images;