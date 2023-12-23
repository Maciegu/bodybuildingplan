import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './Sign.css';

function Register(props){
    const [first_name,setFirstName] = useState('');
    const [last_name,setLastName] = useState('');
    const [login,setLogin] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const warn_text = 'By registring, you agree to the Terms of Service and Privacy policy';


    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Registration done.`);
      };

      const handleChangefName = (e) => {
        setFirstName(e.target.value);
      };
      const handleChangelName = (e) => {
        setLastName(e.target.value);
      };
      const handleChangeLogin = (e) => {
        setLogin(e.target.value);
      };

      const handleChangeEmail = (e) => {
        setEmail(e.target.value);
      };

      const handleChangePassword = (e) => {
        setPassword(e.target.value);
      };

      const addUser = () => {
        const user = {
            first_name: first_name,
            last_name: last_name,
            login: login,
            email: email,
            password: password,
        };
        props.onAdd(user);
        props.onClose();
        setFirstName('');
        setLastName('');
        setLogin('');
        setEmail('');
        setPassword('');

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
                            id="first_name" 
                            value={first_name}
                            onChange={handleChangefName}  
                            placeholder="First Name: "
                            required
                        />
                        <input
                            type="text"
                            id="last_name" required
                            placeholder="Last Name: "
                            value={last_name}
                            onChange={handleChangelName}  
                         />
                         <input
                            type="text"
                            id="login" required
                            placeholder="Login: "
                            value={login}
                            onChange={handleChangeLogin}  
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
                        <input type="submit" id="btn-log" value="Sign Up" onClick={() => addUser()} />
                    </form>
                    <div className="warn-text">{warn_text}</div>
                </div>               
            </div>   
      
    )
}

export default Register;