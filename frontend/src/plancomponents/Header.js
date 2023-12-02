import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Register from './ProfilePage/Register';
import Login from './ProfilePage/Login';
import UserPage from './ProfilePage/UserPage';
import { useState } from 'react';
import Home from './Home.js';
import { Navigate } from 'react-router-dom';
const login=false;

function HeaderLogout({onButtonClick}){
  let navigate = useNavigate();
  return(
    <div className="header">
      <div className='header-logo'>
        <button className='header-logo-icon-btn' onClick={onButtonClick} ><FontAwesomeIcon icon={faDumbbell} className='header-icon'/></button>
      </div>
      <div className='header-navbar'>
        <div className='header-navbar-logout'>
          <button className='btn-logout' id='btn-how-works'>How it works</button>
          <button className='btn-logout' id='btn-features'>Features</button>
      
        </div>
        <div className='header-navbar-sign'>
          <button className='btn-logout' id='btn-login' onClick={() => { navigate('/ProfilePage/Login.js'); }}>Login</button>
          <button className='btn-logout' id='btn-register' onClick={() => { navigate('/ProfilePage/Register.js'); }}>Register</button>
        </div>
      </div>
    </div>
  );
};


function showMenu(){
        const headerMenu = document.querySelector(".header-navbar-login");
        if(headerMenu.style.display === "none"){
            headerMenu.style.display="flex";
        }
        else{
            headerMenu.style.display="none";
        }

        
}

const navItems = ['profile','your plan','gym tracker','health tracker','tutorial','results','settings'];

const listItems = navItems.map((item) => <div class="header-nav-login-item"><button>{item}</button></div>);

function HeaderLogin(){
  let navigate = useNavigate();

  return(
    <div>
      <div className="header-login">
        <div className='header-logo'>
          <button className='header-logo-icon-btn' onClick={() => { navigate('/Register'); }}><FontAwesomeIcon icon={faDumbbell} className='header-icon'/></button>
        </div>
        <div class="header-listing-menu">
            <button class="hidden-menu-btn" onClick={showMenu} ><FontAwesomeIcon icon={faBars} className='header-icon' /></button>
        </div>
      </div>
      <div className='header-navbar-login'>
            {listItems}
      </div>
    </div>
  );
};



function Header({onButtonClick}) {

  const [redirectToHome, setRedirectToHome] = useState(false);

  const handleClick = () => {
    setRedirectToHome(true);
    onButtonClick();
  };

  return(
    <div>
        {redirectToHome && (
            <Routes>
                  <Route path="/Home.js" element={<Home />} />
            </Routes>
        )}
      { login ? <HeaderLogin /> : redirectToHome ? null : <HeaderLogout onButtonClick={handleClick} />}
      {redirectToHome && <Navigate to="/Home.js" />}
      
    </div>
  )
}
  
  export default Header;
