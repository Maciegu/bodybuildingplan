import React, { useState, useEffect } from 'react';
import ResultsTable from './ResultsTable'; 
import './ResultsPage.css';
import Calendar from './Calendar.js';
import axios from 'axios';


const ResultsPage = (props) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const tracksdata = props.userData.foundTrainingTrackData;
  console.log(tracksdata);

  const handleDateChange = (date) => {
    const formattedDate = date.toLocaleDateString('en-CA', { timeZone: 'UTC' });
    setSelectedDate(formattedDate);
  };


  const getTrainingPlanForDate = () => {
    const uniqal_id = props.userData.foundTrainingTrackData.uniqal_id;

    const matchingTraining = tracksdata.find(
      item => item.data === selectedDate
    );
    
    console.log('Selected Date:', selectedDate);
    console.log('Matching Training:', matchingTraining);
    
    const plan = matchingTraining && Array.isArray(matchingTraining.plan) ? matchingTraining.plan : [];
    

    const userPlanForDate = plan.map(exercise => ({
      name: exercise.name,
      weight: exercise.weight,
      set1: exercise.set1,
      set2: exercise.set2,
      set3: exercise.set3
    }));
    
    return userPlanForDate;
  };
  
  

  const userPlanForDate = getTrainingPlanForDate();

  return (
    <div className="cont-menu">
      <div className="profile-cont">
        <div className="profile-avatar">
          <div className="avatar"></div>
          <h1>Results Page</h1>
        </div>
      </div>

      <div className="results-cont">
        <Calendar onDateChange={handleDateChange} />
        {selectedDate && userPlanForDate.length > 0 && (
          <div>
            <h2>Twoje wyniki z {selectedDate}</h2>
            <ResultsTable plan={userPlanForDate} />
          </div>
        )}

        {selectedDate && userPlanForDate.length === 0 && (
          <p>Brak wyników z tego dnia.</p>
        )}
      </div>
    </div>
  );
}

export default ResultsPage;

