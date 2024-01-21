import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import Register from '../../ProfilePage/Signs/Register';
import Login from '../../ProfilePage/Signs/Login';

const headerStyle = {
  content: {
    background: 'transparent',
    border: 'none',
    padding: 0,
    maxWidth: '27%',
    width: 'auto',
    maxHeight: '65%',
    margin: 'auto',
  },
};

const Header = ({ addUser, loginUser }) => {
  const [openRegister, setOpenRegister] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const handleRegisterOpen = () => setOpenRegister(true);
  const handleRegisterClose = () => setOpenRegister(false);
  const handleLoginOpen = () => setOpenLogin(true);
  const handleLoginClose = () => setOpenLogin(false);

  return (
    <div className="header">
      <div className='header-logo'>
        <button className='header-logo-icon-btn'>
          <FontAwesomeIcon icon={faDumbbell} className='header-icon' />
        </button>
      </div>
      <div className='header-navbar'>
        <div className='header-navbar-logout'>
          <button className='btn-logout' id='btn-how-works'>How it works</button>
          <button className='btn-logout' id='btn-features'>Features</button>
        </div>
        <div className='header-navbar-sign'>
          <button className='btn-logout' id='btn-login' onClick={handleLoginOpen}>Login</button>
          <Modal
            isOpen={openLogin}
            onRequestClose={handleLoginClose}
            style={headerStyle}
          >
            <Login
              login={loginUser.login}
              password={loginUser.password}
              onLogin={(user) => loginUser(user)}
            />
          </Modal>
          <button className='btn-logout' id='btn-register' onClick={handleRegisterOpen}>Register</button>
          <Modal
            isOpen={openRegister}
            onRequestClose={handleRegisterClose}
            style={headerStyle}
          >
            <Register
              first_name={addUser.first_name}
              last_name={addUser.last_name}
              email={addUser.email}
              login={addUser.login}
              password={addUser.password}
              onAdd={(user) => addUser(user)}
              onClose={handleRegisterClose}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Header;
