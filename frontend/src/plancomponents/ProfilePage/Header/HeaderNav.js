import UserPage from '../Monitor/UserPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDumbbell, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import PlanPage from '../PlanPage/PlanPage';
import GymTracker from '../GymTracker/GymTracker';
import HealthTracker from '../HealthTracker/HealthTracker';
import ResultsPage from '../ResultsPage/ResultsPage';
import Settings from '../Settings/SettingsPage';
import TutorialPage from '../TutorialPage/TutorialPage';
import React, { useState } from 'react';


function showMenu(){
    const headerMenu = document.querySelector(".header-navbar-login");
    if(headerMenu.style.display === "none"){
        headerMenu.style.display="flex";
    }
    else{
        headerMenu.style.display="none";
    }
}



export default function HeaderNav({ onLogout, onNavSelection  }){

  const handleNavItemClick = (item) => {
    onNavSelection(item);
  };
  
  const navItems = ['profile','your plan','gym tracker','health tracker','tutorial','results','settings'];
  const listItems = navItems.map((item) => (
    <div key={item} className="header-nav-login-item">
      <button onClick={() => onNavSelection(item)}>{item}</button>
    </div>
  ));

  return(
        <div>
       
          <div className="header-login">
            <div className='header-logo'>
            <button className='header-logo-icon-btn'><FontAwesomeIcon icon={faDumbbell} className='header-icon'/></button>
            </div>
            <div class="header-listing-menu">
                <button class="hidden-menu-btn" onClick={onLogout} ><FontAwesomeIcon icon={faPowerOff} className='header-icon' id="logout" /></button>
                <button class="hidden-menu-btn" onClick={showMenu} ><FontAwesomeIcon icon={faBars} className='header-icon'  /></button>
                
            </div>
          </div>
          <div className='header-navbar-login'>{listItems}</div>
          
        </div>
  )
}