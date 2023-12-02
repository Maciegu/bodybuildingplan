import './Sign.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import HeaderNav from './HeaderNav.js';
import Footer from '../Footer.js';
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Register from './Register';


function Login(){
    const [firstname,setFirstName] = useState('');
    const [lastname,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const warn_text = 'By logging in, you agree to the Terms of Service and Privacy policy';
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Registration done.`);
      };

      const handleChangefName = (e) => {
        const newfirstname = e.target.value;
        setFirstName(newfirstname);
      };
      const handleChangelName = (e) => {
        setLastName(e.target.value);
      };

      const handleChangeEmail = (e) => {
        setEmail(e.target.value);
      };

      const handleChangePassword = (e) => {
        const new_password = e.target.value;
        setPassword(e.target.value);
      };

    return (
        <div className='container'>
            <HeaderNav />
            <div className="main-signform">    
                <div className="main-container-sign" id="login">
                    <div className="cont-toogle-btn">
                        <button className="btn-sign" id="btn-register" onClick={() => { navigate('/ProfilePage/Register.js'); }}>Sign Up</button>
                        <button className="btn-sign" id="btn-login" onClick={() => { navigate('/ProfilePage/Login.js'); }}>Log in</button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input
                                type="email" 
                                placeholder="Email address: " 
                                name="email"
                                id="email" 
                                value={email}
                                onChange={handleChangeEmail} 
                                required 
                            />
                            <input 
                                type="password" 
                                placeholder="Password: " 
                                name="psw"
                                id="psw"  
                                value={password}
                                onChange={handleChangePassword}
                                required
                            />
                        <input type="submit" id="btn-log" value="Sign in" />
                        <div className="warn-text">{warn_text}</div>
                    </form>
                </div>
                
            </div>   
            <Routes>
                <Route path="/ProfilePage/Register.js" element={<Register />} />
             </Routes>
        </div>
        
    )
}

export default Login;