import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './Sign.css';

function Login(props){
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const warn_text = 'By registring, you agree to the Terms of Service and Privacy policy';

  const logUser = () => {
    const user = {
        login: login,
        password: password,
    };
    props.onLogin(user);
}
  

    // setLogin('');
    // setPassword('');
  

    const handleSubmit = (e) => {
        e.preventDefault();
        //alert(`Login done.`);
      };




    return (
            <div className="main-signform">    
                <div className="main-container-sign" id="login">
                    <div className="cont-toogle-btn">
                        <button className="btn-sign" id="btn-register" >Sign Up</button>
                        <button className="btn-sign" id="btn-login" >Log in</button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input
                                type="text" 
                                placeholder="Login: " 
                                name="login"
                                id="login" 
                                value={login}
                                onChange={(e) => setLogin(e.target.value)}
                                required 
                            />
                            <input 
                                type="password" 
                                placeholder="Password: " 
                                name="psw"
                                id="psw"  
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        <input type="submit" id="btn-log" value="Sign in" onClick={() => logUser()} />
                        <div className="warn-text">{warn_text}</div>
                    </form>
                </div>
                
            </div>         
    )
}

export default Login;