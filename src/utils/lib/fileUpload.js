const fileUpload = async (event) => {
    let uploadedPhotos = []
    if (!event) {
        throw new Error(`In function fileUpload has error: check the props.`);
    }
    uploadedPhotos = Array.from(event?.target?.files) || [];
    return uploadedPhotos;
};

export default fileUpload;