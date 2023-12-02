import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import UserPage from './ProfilePage/UserPage.js';
import GymTracker from './ProfilePage/GymTracker.js';
import HealthTracker from './ProfilePage/HealthTracker.js';
import PlanPage from './ProfilePage/PlanPage.js';
import Results from './ProfilePage/ResultsPage.js';
import Settings from './ProfilePage/SettingsPage.js';
import Tutorials from './ProfilePage/TutorialPage.js';
import FormProfile from './ProfilePage/FormProfile.js';
import Register from './ProfilePage/Register.js';
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import React, { useState } from 'react';

function App() {
  const [renderHeaderAndFooter, setRenderHeaderAndFooter] = useState(true);
  const handleButtonClick = () => {
    setRenderHeaderAndFooter(false);
  };

  return (
    <div className="App">
      {renderHeaderAndFooter && <Header onButtonClick={handleButtonClick}/>}
      <Main onButtonClick={handleButtonClick} />
      {renderHeaderAndFooter && <Footer />}
      {/* <FormProfile /> */}
    </div>
  );
}

export default App;
