import './UserPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import HeaderNav from '../Header/HeaderNav.js';
import GymTracker from '../GymTracker/GymTracker.js';
import HealthTracker from '../HealthTracker/HealthTracker.js';
import PlanPage from '../PlanPage/PlanPage.js';
import Results from '../ResultsPage/ResultsPage.js';
import Settings from '../Settings/SettingsPage.js';
import Tutorials from '../TutorialPage/TutorialPage.js';
import FormProfile from '../FormRegister/FormProfile.js';
import PlanCreator from '../PlanPage/PlanCreator.js';
import React, { useState } from 'react';
import { tilesData } from './UserPageData.js';
import Monitor from './Monitor.js';
import axios from '../../../axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';


class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedComponent: null,
      renderUserPageContent: true,
      users: [],
      personal_users_data:[],
      training_plans_data:[],
      training_track_data:[],
      training_track_single_data:[],
      registrationSuccess: false,
      userId: null,
      matchingUser: props.matchingUser,
      foundPersonalData: props.foundPersonalData,
      foundTrainingTrackData: props.foundTrainingTrackData,
    };
  }

    componentDidMount() {
      this.fetchUsers();
      this.fetchPersonalDatas();
      this.fetchTrainingDatas();
      this.fetchTrainingTrackDatas();
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
    async fetchTrainingTrackDatas() {
      const res = await axios.get('/planstrack');
      const training_track_data = res.data;
      this.setState({ training_track_data });
    }

    async updatePassword(password) {
      try {
        // Pobierz ID planu na podstawie uniqal_id
        const existingUser = await axios.get('/users', { params: { uniqal_id: password.uniqal_id } });
    
        if (existingUser.data.length === 0) {
          throw new Error("User Data not found.");
        }
    
        const userID = existingUser.data[0]._id;
    
        // Aktualizuj dane planu
        await axios.put(`/users/${userID}`, password);
    
        alert('Password data updated successfully!');
      } catch (err) {
        alert(`Error updating personal data: ${err.message}`);
      }
  }
  

    async updatePersonalData(personal_data) {
      try {
        // Pobierz ID planu na podstawie uniqal_id
        const existingUser = await axios.get('/personaldatas', { params: { uniqal_id: personal_data.uniqal_id } });
    
        if (existingUser.data.length === 0) {
          throw new Error("Personal Data not found.");
        }
    
        const userID = existingUser.data[0]._id;
    
        // Aktualizuj dane planu
        await axios.put(`/personaldatas/${userID}`, personal_data);
    
        alert('Personal data updated successfully!');
      } catch (err) {
        alert(`Error updating personal data: ${err.message}`);
      }
  }
  

  async addTrainingData(plan) {
    const training_plans_data = [...this.state.training_plans_data];
    try {

        const existingPlan = training_plans_data.find(existingPlan => existingPlan.uniqal_id === plan.uniqal_id);

        if (existingPlan) {
          NotificationManager.warning('Plan treningowy o tym samym uniqal_id już istnieje.');
          return;
        }
        const res = await axios.post('/plans', plan);
        // tu już nie wykonuje kodu niżej
        const newTrainingData = res.data;
        training_plans_data.push(newTrainingData);
        this.setState({ training_plans_data });
        // Poinformuj o sukcesie
        NotificationManager.success('Plan treningowy dodany pomyślnie.');
    } catch (err) {
        NotificationManager.error(err.response.data.message);
    }
}

  async updateTrainingData(plan) {
    try {
      // Pobierz ID planu na podstawie uniqal_id
      const existingPlan = await axios.get('/plans', { params: { uniqal_id: plan.uniqal_id } });
  
      if (existingPlan.data.length === 0) {
        throw new Error("TrainingPlan not found.");
      }
  
      const planId = existingPlan.data[0]._id;
  
      // Aktualizuj dane planu
      await axios.put(`/plans/${planId}`, plan);
  
      alert('Training plan updated successfully!');
    } catch (err) {
      alert(`Error updating training plan: ${err.message}`);
    }
  }

  async addTrainingTrack(training_data) {
    const training_track_data = [...this.state.training_track_data];
    try {

      const existingTraining = training_track_data.find(existingTraining => (
        existingTraining.data === training_data.data && existingTraining.uniqal_id === training_data.uniqal_id
      ));
        if (existingTraining) {
          alert('Juz dodales w tym dniu trening!');
          return;
        }
        const res = await axios.post('/planstrack', training_data);
        // tu już nie wykonuje kodu niżej
        const newTrainingData = res.data;
        training_track_data.push(newTrainingData);
        this.setState({ training_track_data });
        // Poinformuj o sukcesie
        alert('Trening dodany pomyslnie');
    } catch (err) {
        NotificationManager.error(err.response.data.message);
    }
}

  async updateTrainingTrack(training_data) {
    try {
      // Pobierz ID planu na podstawie uniqal_id
      const existingTraining = await axios.get('/planstrack', { params: { uniqal_id: training_data.uniqal_id, data: training_data.data } });
  
      if (existingTraining.data.length === 0) {
        throw new Error("TrainingPlan not found.");
      }
  
      const planId = existingTraining.data[0]._id;
  
      // Aktualizuj dane planu
      await axios.put(`/planstrack/${planId}`, training_data);
  
      alert('Trening zaktualizowany');
    } catch (err) {
      alert(`Błąd dodawania treningu: ${err.message}`);
    }
  }


  



   handleNavSelection = (componentName) => {
    switch (componentName) {
      case 'profile':
        this.setState({ selectedComponent: null, renderUserPageContent: true });
        break;
      case 'your plan':
        this.setState({ selectedComponent: <PlanPage userData={this.props.userData} />, renderUserPageContent: false });
        break;
      case 'gym tracker':
        this.setState({ selectedComponent:
           <GymTracker
            userData={this.props.userData}
            addTrainingTrack={(training_data) => this.addTrainingTrack(training_data)}
            updateTrainingTrack={(training_data) => this.updateTrainingTrack(training_data)}
           
           />, renderUserPageContent: false });
        break;
      case 'health tracker':
        this.setState({ selectedComponent: <HealthTracker userData={this.props.userData} />, renderUserPageContent: false });
        break;
      case 'tutorial':
        this.setState({ selectedComponent: <Tutorials userData={this.props.userData} />, renderUserPageContent: false });
        break;
      case 'results':
        this.setState({ selectedComponent: <Results userData={this.props.userData}/>, renderUserPageContent: false });
        break;
      case 'settings':
        this.setState({
          selectedComponent:
          <Settings
            userData={this.props.userData}
            updatePersonalData={(personal_data) => this.updatePersonalData(personal_data)}
            updatePassword={(password) => this.updatePassword(password)}
          />,
            renderUserPageContent: false
        });
        break;
      default:
        this.setState({ selectedComponent: null, renderUserPageContent: false });
        break;
    }
  };


  render() {
    const { onLogout, userData } = this.props;
    const { selectedComponent, renderUserPageContent } = this.state;

    return (
      <div>
        <HeaderNav onLogout={onLogout} onNavSelection={this.handleNavSelection} userData={userData}/>
        {this.state.renderUserPageContent && (
          <Monitor
            addTrainingData={(plan) => this.addTrainingData(plan)}
            updateTrainingData={(plan) => this.updateTrainingData(plan)}
            matchingUser={userData.matchingUser}
            foundPersonalData={userData.foundPersonalData}
            foundTrainingData={userData.foundTrainingData}
            foundTrainingTrackData={userData.foundTrainingTrackData}
          />
        )}
        {this.state.selectedComponent}
      </div>
    );
  }
}

export default UserPage;


