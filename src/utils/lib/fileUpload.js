const fileUpload = async (event) => {
    let uploadedPhotos = []
    try {
        if (!event) {
            console.log(`[fileUpload] Check the props in fileUpload.`)
            return uploadedPhotos;
        }
        uploadedPhotos = Array.from(event?.target?.files) || [];
        return uploadedPhotos;
    } catch (error) {
        throw new Error(`[fileUpload] Error is: ${error}`)
    }
};

export default fileUpload;