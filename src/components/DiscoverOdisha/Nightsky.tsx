// src/components/NightSky.js
import React from 'react';
import './NightSky.css'; // Import custom styles for animations
interface NightSkyProps {
    numShootingStars?: number;
  }
const NightSky:React.FC = ({ numShootingStars = 5 }: NightSkyProps) => {
  // Create an array of shooting stars based on `numShootingStars`
  const shootingStars = Array.from({ length: numShootingStars }, (_, index) => (
    <div
      key={index}
      className={`absolute w-[100px] h-[2px] bg-gradient-to-r from-white to-transparent shooting-star-${index + 1}`}
      style={{ animationDelay: `${index}s` }}
    />
  ));

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b z-100 from-[#0b0b2b] to-[#090a0f]">
      {/* Stars */}
      <div className="absolute w-px h-px bg-white twinkling-stars"></div>

      {/* Shooting Stars */}
      {shootingStars}
    </div>
  );
}

export default NightSky;
