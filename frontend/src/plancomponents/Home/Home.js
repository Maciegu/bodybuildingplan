import React, { useState } from 'react';
import axios from '../../axios';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';
import Forms from '../ProfilePage/FormRegister/FormProfile'; // Import komponentu Forms

import {NotificationContainer, NotificationManager} from 'react-notifications';


class Home extends React.Component {
  constructor(props) {
    super(props);
    ///
    this.state = {
      users: [],
      personal_users_data:[],
      registrationSuccess: false
    };
  }

  componentDidMount() {
    this.fetchUsers();
    this.fetchPersonalDatas();
  }

  async fetchUsers() {
    const res = await axios.get('/users');
    const users = res.data;

    this.setState({ users });
  }

  async fetchPersonalDatas() {
    const res = await axios.get('/personaldatas');
    const personal_users_data = res.data;

    this.setState({ personal_users_data });
  }


  async addUser(user) {
    const users = [...this.state.users];
    // add to backend
    try {
      const res = await axios.post('/users', user);
      const newUser = res.data;
      // add to frontend
      users.push(newUser);
      this.setState({ users, registrationSuccess: true });
    } catch (err) {
      NotificationManager.error(err.response.data.message);
    }
  }

  async loginUser(user) {
    const { login, password} = user;
    try {
      const response = await axios.get(`/users?login=${login}`);
      const foundUser = response.data[0];

      if (foundUser && foundUser.login === login && foundUser.password === password) {
        // Jeśli użytkownik istnieje i hasło się zgadza
        this.props.onLoginSuccess();
        // Możesz również wykonać inne akcje po zalogowaniu
      } else {
        NotificationManager.error('Invalid login or password');
      }
    } catch (err) {
      NotificationManager.error(err.response.data.message);
    }
  }

  async addPersonalData(personal_data) {
    const personal_users_data = [...this.state.personal_users_data]; // fix the variable name
    // add to backend
    try {
      const res = await axios.post('/personaldatas', personal_data);
      const newPersonalData = res.data;
      // add to frontend
      personal_users_data.push(newPersonalData); // fix the variable name
      this.props.onLoginSuccess();
      this.setState({ personal_users_data }); // fix the variable name
    } catch (err) {
      NotificationManager.error(err.response.data.message);
    }
  }

  
  render() {

    const { onLoginSuccess } = this.props;
    const { registrationSuccess } = this.state;


    return (
    <div>
      <NotificationContainer />
      {registrationSuccess ? (
          <Forms addPersonalData={(personal_data) => this.addPersonalData(personal_data)}/>
        ) : (
          <>
            <Header loginUser={(user) => this.loginUser(user)} addUser={(user) => this.addUser(user)}/>
            <Main />
            <Footer />
          </>
        )
      }
      
    </div>
    )
  }
}

export default Home;