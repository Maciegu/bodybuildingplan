import './App.css';
import Home from './plancomponents/Home/Home.js';
import React, { useState } from 'react';
import Notes from './components/Notes/Notes';
import UserPage from './plancomponents/ProfilePage/Monitor/UserPage.js';
import Forms from './plancomponents/ProfilePage/FormRegister/FormProfile.js';

const login=false;

function App() {

  const [login, setLogin] = useState(false);

  const handleLoginSuccess = () => {
    setLogin(true);
  };

  const handleLogout = () => {
    setLogin(false);
  };

  return (
    <div className="App">
      {login ? <UserPage onLogout={handleLogout} /> : <Home onLoginSuccess={handleLoginSuccess}/> }
    </div>
  );
}

export default App;
