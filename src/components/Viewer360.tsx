'use client';
import React, { useEffect, useRef, useState } from 'react';
import { getVF3ImagePath } from '../data/vf3-info';
import Image from 'next/image';

type Props = {
  colorId: string;
};

const Viewer360 = ({ colorId }: Props) => {
  const [currentImage, setCurrentImage] = useState(1 as number);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0 as number);
  const currentImageRef = useRef(0 as number);

  const totalImages: number = 35; // Total number of images
  const [images, setImages] = useState([] as string[]);

  useEffect(() => {
    const newImages = [];
    for (let i = 1; i <= totalImages; i++) {
      const imagePath = getVF3ImagePath(colorId, i);
      newImages.push(imagePath);
    }
    setImages(newImages);
  }, [colorId]);

  useEffect(() => {
    const interval = setInterval(() => {
      // setCurrentImage((prev) => (prev + 1 > totalImages ? 1 : prev + 1));
    }, 300);

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const dx = e.clientX - startXRef.current;
        const changeImage = Math.floor(dx / 25);
        const newImage = (currentImageRef.current - changeImage) % totalImages;
        setCurrentImage(newImage > 0 ? newImage : newImage + totalImages);
      }
    };
    const handleMouseUp = () => {
      setIsDragging(false);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      clearInterval(interval);
    };
  }, [isDragging, totalImages]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsDragging(true);
    startXRef.current = e.clientX;
    currentImageRef.current = currentImage;
  };

  const handleMouseUp = (): void => {
    setIsDragging(false);
    startXRef.current = 0;
    currentImageRef.current = 0;
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => {
      if (prev + 1 > totalImages) {
        return 1;
      }
      return prev + 1;
    });
  };

  return (
    <div
      style={{
        width: '100%',
        height: 450,
        background: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '600px',
          height: '400px',
          overflow: 'hidden',
          cursor: 'grab',
          backgroundImage: "url('/background.webp')",
          backgroundPosition: 'bottom',
          userSelect: 'none',
          position: 'relative',
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {images.map((imageUrl, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={imageUrl}
            src={imageUrl}
            alt={`Car angle ${currentImage}`}
            style={{
              width: 503,
              height: '100%',
              userSelect: 'none',
              objectFit: 'contain',
              display: index + 1 === currentImage ? 'block' : 'none',
              position: 'absolute',
              bottom: -50,
              left: '50%',
              transform: 'translateX(-50%)',
            }}
            draggable="false"
          />
        ))}
      </div>
    </div>
  );
};

export default Viewer360;
