import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import '../Header.css';
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Register from './Register';
import Login from './Login';
import UserPage from './UserPage';

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

export default function HeaderNav(){
  let navigate = useNavigate();
  return(
        <div>
          <Routes>
            <Route path="/ProfilePage/UserPage.js" element={<UserPage />} />
            <Route path="/ProfilePage/Register.js" element={<Register />} />
            <Route path="/ProfilePage/Login.js" element={<Login />} />
          </Routes>
          <div className="header-login">
            <div className='header-logo'>
            <button className='header-logo-icon-btn' onClick={() => { navigate('/ProfilePage/UserPage.js'); }}><FontAwesomeIcon icon={faDumbbell} className='header-icon'/></button>
            </div>
            <div class="header-listing-menu">
                <button class="hidden-menu-btn" onClick={showMenu} ><FontAwesomeIcon icon={faBars} className='header-icon' /></button>
            </div>
          </div>
          <div className='header-navbar-login'>{listItems}</div>
          
        </div>
  )
}