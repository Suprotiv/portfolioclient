import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const currentScrollY = window.pageYOffset;

        // Check if the user is scrolling down or up
        const isScrollingDown = currentScrollY > lastScrollY;
        
        // If the element is in view, add the 'animate' class
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } 
        // If the element is out of view and the user is scrolling upwards, remove the 'animate' class
        else if (!isScrollingDown) {
          entry.target.classList.remove('animate');
        }

        // Update lastScrollY for the next scroll event
        lastScrollY = currentScrollY;
      });
    }, { threshold: 0.5 });

    const elements = document.querySelectorAll('.animate-on-scroll , .animate-on-scroll1 , .animate-on-scrollUp');
    elements.forEach((el) => observer.observe(el));

    // Cleanup function to unobserve when component is unmounted
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};

export default useScrollAnimation;
