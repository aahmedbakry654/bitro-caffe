import React, { useState } from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';
import FullscreenImage from './components/FullscreenImage';

import './App.css';

  
function App() {
  
  const [fullscreenImage, setFullscreenImage] = useState(null);
  


  const handleClose = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="App">
      {/* المكونات الرئيسية */}
      <Hero />

      <Footer />

      {/* عرض الصورة لما تتفتح */}
      {fullscreenImage && (
        <FullscreenImage src={fullscreenImage} onClose={handleClose} />
      )}
    </div>
  );
}

export default App;