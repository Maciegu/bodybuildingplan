import './App.css';
import Home from './plancomponents/Home/Home.js';
import React, { useState } from 'react';
import UserPage from './plancomponents/ProfilePage/Monitor/UserPage.js';
import Forms from './plancomponents/ProfilePage/FormRegister/FormProfile.js';

const login = false;

function App() {
  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState({ matchingUser: null, foundPersonalData: null, foundTrainingData: null, foundTrainingTrackData: null });

  const handleLoginSuccess = ({ matchingUser, foundPersonalData, foundTrainingData, foundTrainingTrackData }) => {
    setUserData({ matchingUser, foundPersonalData, foundTrainingData, foundTrainingTrackData });
    setLogin(true);
  };

  const updatePersonalData = (personal_data) => {
    // Obsługa aktualizacji danych osobowych
    console.log('Updated personal data:', personal_data);
  };

  const handleLogout = () => {
    setLogin(false);
  };

  const { matchingUser, foundPersonalData, foundTrainingData, foundTrainingTrackData } = userData; // Dodane zdefiniowanie zmiennych

  return (
    <div className="App">
      {login ? (
        <UserPage onLogout={handleLogout} userData={{ matchingUser, foundPersonalData, foundTrainingData, foundTrainingTrackData }} />
      ) : (
        <Home onLoginSuccess={handleLoginSuccess} userData={userData} updatePersonalData={updatePersonalData} />
      )}
    </div>
  );
}

export default App;
