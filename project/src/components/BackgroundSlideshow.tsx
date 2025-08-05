import React, { useEffect, useState } from 'react';

const images = [
  '/cs.png',
  '/cs2.png',
  '/csc1.png',
  '/csc2.png',
  '/csc3.png',
  '/csc4.png',
  '/csc5.png',
];

const BackgroundSlideshow: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      {images.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt="slideshow background"
          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100' : 'opacity-0'}`}
          style={{ zIndex: 0 }}
        />
      ))}
      <div className="absolute inset-0 bg-black/30" style={{zIndex: 1}}></div>
    </div>
  );
};

export default BackgroundSlideshow;
