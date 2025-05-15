import React, { useState } from 'react';
import './Hero.css';
import Gallery from '../components/Gallery';

const Hero = () => {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div className="hero-wrapper w-full h-screen relative overflow-hidden">
      {/* نص بيترو كافيه ومطعم */}
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


      {/* النصوص الأربعة تحت الفيديو */}
      <div className="hero-info-text absolute bottom-24 left-1/2 transform -translate-x-1/2 z-10 text-center">
        <p className="info-line text-lg md:text-xl text-white font-semibold drop-shadow-md">
         بيترو، بنقدّم لك تجربة متكاملة تجمع بين الطعم الأصيل والجو المميز.
        </p>
        <p className="info-line text-lg md:text-xl text-white font-semibold drop-shadow-md">
        أول ما تدخل بيترو هتحس إنك في حتة تانية.

        </p>
        <p className="info-line text-lg md:text-xl text-white font-semibold drop-shadow-md">
        ريحة القهوة، صوت المزيكا، والتذوق العالي في كل حاجة
هي مش خروجة وخلاص، دي تجربة بتفصلك عن الدنيا.

        </p>
        <p className="info-line text-lg md:text-xl text-white font-semibold drop-shadow-md">
         بيترو علشان اللحظة تستاهل.
        </p>
      </div>

      {/* زر المينيو */}
      <div className="menu-button-container absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <button
          className="menu-button bg-black bg-opacity-70 text-white px-6 py-3 rounded-xl text-lg border border-cyan-400 shadow-lg hover:bg-cyan-700 transition"
          onClick={() => setShowGallery(!showGallery)}
        >
          <span className="menu-icon">☰</span> Menu
        </button>
      </div>

      {/* عرض الجاليري عند الضغط */}
      {showGallery && <Gallery />}
    </div>
  );
};

export default Hero;