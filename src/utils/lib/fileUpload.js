const fileUpload = async (event) => {
    let uploadedPhotos = []
    try {
        if (!event) {
            throw new Error(`[fileUpload] Check the props in fileUpload.`);
        }
        uploadedPhotos = Array.from(event?.target?.files) || [];
        return uploadedPhotos;
    } catch (error) {
        throw new Error(`[fileUpload] Error is: ${error}`)
    }
};

export default fileUpload;