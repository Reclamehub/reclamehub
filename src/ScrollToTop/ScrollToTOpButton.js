import React, { useState, useEffect } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import './ScrollToTop.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    setIsVisible(window.pageYOffset > 150); // Show the button when the user scrolls down 100 pixels
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`scroll-to-top-button-div ${isVisible ? 'visible' : ''}`}
      onClick={handleScrollToTop}
    >
      <div className="scroll_icon_div">
        <AiOutlineArrowUp className='icon' />
      </div>
    </button>
  );
};

export default ScrollToTopButton;
