import React, { useState } from 'react';
import './Hero.css';
import Gallery from '../components/Gallery';

const Hero = () => {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div className="hero-wrapper w-full h-screen relative overflow-hidden">
      
      {/* نص بيترو كافيه */}
      <div className="hero-text-above absolute top-8 left-1/2 transform -translate-x-1/2 z-10 text-center">
        <h1 className="bitro-glow-text text-5xl md:text-7xl text-cyan-400 font-bold drop-shadow-lg">
          Bitro
        </h1>
      </div>

      {/* فيديو الخلفية */}
      <div className="hero-video-container absolute inset-0 w-full h-full z-0">
        <video
          src="/vediopag/pagg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="hero-video w-full h-full object-cover"
        />
      </div>

      {/* زر المينيو */}
      <div className="menu-button-container absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <button
          className="menu-button bg-black bg-opacity-70 text-white px-6 py-3 rounded-xl text-lg border border-cyan-400 shadow-lg hover:bg-cyan-700 transition"
          onClick={() => setShowGallery(!showGallery)}
        >
          Menu
        </button>
      </div>

      {/* عرض الجاليري عند الضغط */}
      {showGallery && <Gallery />}
    </div>
  );
};

export default Hero;