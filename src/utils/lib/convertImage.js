const convertImage = (photo) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const MAX_WIDTH = 1000;
                const MAX_HEIGHT = 1000;
                let width = img.width;
                let height = img.height;
                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');

                // Adjust image quality
                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = 'high';

                ctx.drawImage(img, 0, 0, width, height);

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
                    1 // Adjust quality here (0.9 (90%) for example)
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
};

export default convertImage