import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import React, { useState } from 'react';

function Home() {
  const [renderHeaderAndFooter, setRenderHeaderAndFooter] = useState(true);
  const handleButtonClick = () => {
    setRenderHeaderAndFooter(false);
  };

  return (
    <div className="Home">
      {renderHeaderAndFooter && <Header onButtonClick={handleButtonClick}/>}
      <Main onButtonClick={handleButtonClick} />
      {renderHeaderAndFooter && <Footer />}
    </div>
  );
}

export default Home;