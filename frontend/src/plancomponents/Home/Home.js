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
      training_plans_data:[],
      registrationSuccess: false,
      userId: null,
    };
  }

  componentDidMount() {
    this.fetchUsers();
    this.fetchPersonalDatas();
    this.fetchTrainingDatas();
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

  async fetchTrainingDatas() {
    const res = await axios.get('/plans');
    const training_plans_data = res.data;

    this.setState({ training_plans_data });
  }

  generateUniqalId() {
    // Prosta metoda generowania unikalnego identyfikatora na podstawie daty
    return Date.now().toString();
  }


  async addUser(user) {
    const users = [...this.state.users];
    // add to backend
    try {
      const uniqal_id = this.generateUniqalId();
      // Dodaj uniqal_id do obiektu użytkownika
      user.uniqal_id = uniqal_id;
      const res = await axios.post('/users', user);
      const newUser = res.data;
      
      // add to frontend
      users.push(newUser);
      this.setState({ users, registrationSuccess: true, userId: uniqal_id });
    } catch (err) {
      NotificationManager.error(err.response.data.message);
    }
  }

  async loginUser(user) {
    const { login, password} = user;
    try {
      const response = await axios.get(`/users?login=${login}`);
      const foundUsers = response.data;
  
      const matchingUser = foundUsers.find((user) => user.login === login && user.password === password);
      if (matchingUser) {
        const take_uniqal_id = matchingUser.uniqal_id;
        const response_personal_data = await axios.get(`/personaldatas?uniqal_id=${take_uniqal_id}`);
        const response_training_data = await axios.get(`/plans?uniqal_id=${take_uniqal_id}`);
        const response_training_track_data = await axios.get(`/planstrack?uniqal_id=${take_uniqal_id}`);
        const foundPersonalData = response_personal_data.data[0];
        const foundTrainingData = response_training_data.data[0];
        const foundTrainingTrackData = response_training_track_data.data;
        this.props.onLoginSuccess({matchingUser,foundPersonalData,foundTrainingData, foundTrainingTrackData});
      } else {
        NotificationManager.error('Invalid login or password');
      }
    } catch (err) {
      NotificationManager.error(err.response.data.message);
    }

  }

 
  



  async addPersonalData(personal_data) {
    const personal_users_data = [...this.state.personal_users_data];
    try {
      personal_data.uniqal_id = this.state.userId;
      const res = await axios.post('/personaldatas', personal_data);
      const newPersonalData = res.data;
      personal_users_data.push(newPersonalData);
      this.setState({ personal_users_data });
      this.props.onLoginSuccess(); 
    } catch (err) {
      NotificationManager.error(err.response.data.message);
    }
  }

 

  
  render() {

    const { onLoginSuccess } = this.props;
    const { userData } = this.props;
    const { registrationSuccess} = this.state;


    return (
    <div>
      <NotificationContainer />
      {registrationSuccess ? (
          <Forms addPersonalData={(personal_data) => this.addPersonalData(personal_data)}/>
        ) : (
          <>
            <Header loginUser={(user) => this.loginUser(user)}  addUser={(user) => this.addUser(user)}/>
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