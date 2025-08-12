import React, { useEffect, useState } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
  speed?: number;
  overlay?: boolean;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className = '',
  backgroundImage,
  speed = 0.5,
  overlay = false,
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: `center ${scrollY * speed}px`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }
    : {};

  return (
    <div
      className={`relative min-h-screen ${className} paral`}
      style={parallaxStyle}
    >
      {overlay && (
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
      )}
      <div className="relative z-20">{children}</div>
    </div>
  );
};