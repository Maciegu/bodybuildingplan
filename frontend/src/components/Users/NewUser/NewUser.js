import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './Sign.css';

function NewUser(props) {

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const warn_text = 'By registring, you agree to the Terms of Service and Privacy policy';

  const changeNameHandler = event => {
    const value = event.target.value;
    setName(value);
  }  
  const changeSurnameHandler = event => {
    const value = event.target.value;
    setSurname(value);
  }
  const changePasswordHandler = event => {
    const value = event.target.value;
    setPassword(value);
  }
  const changeLoginHandler = event => {
    const value = event.target.value;
    setLogin(value);
  }
  const changeEmailHandler = event => {
    const value = event.target.value;
    setEmail(value);
  }
  const addUser = () => {
    const user = {
        name: name,
        surname: surname,
        login: login,
        email: email,
        password: password,
    };
    props.onAdd(user);

    setName('');
    setSurname('');
    setLogin('');
    setEmail('');
    setPassword('');
    setShowForm(false);
  }

  return (
    <div className="main-signform">
                <div className="main-container-sign" id="register">
                    <div className="cont-toogle-btn">
                        <button className="btn-sign" id="btn-register" >Sign Up</button>
                        <button className="btn-sign" id="btn-login">Log in</button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="fname" 
                            value={name}
                            onChange={handleChangefName}  
                            placeholder="First Name: "
                            required
                        />
                        <input
                            type="text"
                            id="lname" required
                            placeholder="Last Name: "
                            value={surname}
                            onChange={handleChangelName}  
                         />
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
                            minlength="8"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*"
                            title="Pamietaj by uzyc minimum 1 cyfry i wielkiej litery"
                            name="psw" id="psw" required 
                            value={password}
                            onChange={handleChangePassword}
                            required
                        />
                        <div className="warn-text">At least 8 characters, 1 uppercase letter, 1 number & 1 symbol </div>
                        <input type="submit" id="btn-log" value="Sign Up" onClick={() => addUser()}/>
                    </form>
                    <div className="warn-text">{warn_text}</div>
                </div>               
            </div>   
  );
}

export default NewUser;