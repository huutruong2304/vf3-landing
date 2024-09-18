'use client';
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

type Props = {};

const ScrollToTop = (props: Props) => {
  const visiblePosition = 500;
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > visiblePosition);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <button onClick={scrollToTop} className="scroll-top-btn" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
        <FaArrowUp />
      </button>
    </>
  );
};

export default ScrollToTop;
