import { useEffect } from 'react';

const LazyLoader = () => {
  useEffect(() => {
    const handleImages = () => {
      const blurDivs = document.querySelectorAll('.blur-load');
      blurDivs.forEach((div) => {
        const img = div.querySelector('.inner-div img');
        if (!img) return; // Skip if img doesn't exist

        function loaded() {
          div.classList.add('loaded'); // Add the loaded class to make the image visible
        }

        if (img.complete) {
          loaded(); // If the image is already loaded, call the loaded function
        } else {
          img.addEventListener('load', loaded); // Add event listener for the load event
        }
      });
    };

    // Run initially for existing DOM elements
    handleImages();

    // Use MutationObserver to watch for new elements
    const observer = new MutationObserver(() => {
      handleImages(); // Re-run logic when DOM changes
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Clean up observer on unmount
    return () => observer.disconnect();
  }, []);

  return null; // No UI rendered by this component
};

export default LazyLoader;
