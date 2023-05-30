const MAX_WIDTH = 1000;
const MAX_HEIGHT = 1000;

const createCanvasImages = (img, maxHeight, maxWidth) => {
    let canvasEl = document.createElement('canvas');
    let width = img.width;
    let height = img.height;
    if (width > height) {
        if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
        }
    } else {
        if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
        }
    }
    canvasEl.width = width;
    canvasEl.height = height;

    return canvasEl;
}

const drawImage = (img, canvas, context, quality,) => {
    const ctx = canvas.getContext(context);
    // Adjust image quality
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = quality;

    // draw image
    // ctx.drawImage(img, 0, 0, width, height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

const convertImage = (photo) => {
    try {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = new Image();
                img.onload = () => {
                    let canvas = createCanvasImages(img, MAX_HEIGHT, MAX_WIDTH);
                    drawImage(img, canvas, '2d', 'high');

                    canvas.toBlob(
                        (blob) => {
                            if (blob) {
                                const convertedPhoto = {
                                    file: blob,
                                    url: URL.createObjectURL(blob),
                                };
                                resolve(convertedPhoto);
                            } else {
                                reject(new Error('Conversion failed. Blob is null.'));
                            }
                        },
                        'image/jpeg',
                        1 // Adjust quality here 0.9 for 90%, 1 for 100% for example)
                    );
                };
                img.onerror = (error) => {
                    reject(new Error('Image loading failed.'));
                };

                img.src = event.target.result;
            };
            reader.onerror = (error) => {
                reject(new Error('File reading failed.'));
            };
            reader.readAsDataURL(photo);
        });
    } catch (error) {
        // Handle the image conversion error
        console.error(`[convertImages] error: ${error}`,);
        return null;
    }

};

export default convertImage