// todo put in utils
const executeScroll = (deltaY, currentIndex, lastIndex) => {
    if (typeof deltaY !== 'number' || typeof currentIndex !== 'number' || typeof lastIndex !== 'number') {
        throw new Error('Invalid input. Expected numbers for deltaY, currentIndex, and lastIndex.');
    }
    const firstIndex = 0;
    const nextIndex = currentIndex + 1;
    const previousIndex = currentIndex - 1;
    if (deltaY > 0) {
        // Scroll down, go to the next image
        const isFirstSlide = currentIndex === firstIndex;
        return isFirstSlide ? lastIndex : previousIndex;
    }
    const isLastSlide = currentIndex === lastIndex;
    return isLastSlide ? firstIndex : nextIndex;
};

export default executeScroll