// todo put in utils
const executeScroll = (deltaY, currentIndex, lastIndex) => {
    if (typeof deltaY !== 'number' || typeof currentIndex !== 'number' || typeof lastIndex !== 'number') {
        throw new Error('In function executeScroll has error: Invalid input. Expected numbers for deltaY, currentIndex, and lastIndex.');
    }
    const firstIndex = 0;
    const nextIndex = currentIndex + 1;
    const previousIndex = currentIndex - 1;
    if (deltaY > 0) {
        // Scroll down, return to previous image
        const isFirstSlide = currentIndex === firstIndex;
        return isFirstSlide ? lastIndex : previousIndex;
    }
    //Scroll down, go to next image
    const isLastSlide = currentIndex === lastIndex;
    return isLastSlide ? firstIndex : nextIndex;
};

export default executeScroll