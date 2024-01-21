import React, { useState } from 'react';
import Modal from 'react-modal';
import YouTube from 'react-youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import {CwiczeniaNaBarki,CwiczeniaNaBiceps,CwiczeniaNaBrzuch,CwiczeniaNaKlatke,CwiczeniaNaNogi,CwiczeniaNaPlecy,CwiczeniaNaTriceps} from '../PlanPage/AllexercisesForPC.js';
import './TutorialPage.css';
import {tutStyle, youtubeOpts} from './TutorialConstans.js';

const Tutorials = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercisesPlan = [
    ...CwiczeniaNaBarki,
    ...CwiczeniaNaBiceps,
    ...CwiczeniaNaBrzuch,
    ...CwiczeniaNaKlatke,
    ...CwiczeniaNaNogi,
    ...CwiczeniaNaPlecy,
    ...CwiczeniaNaTriceps,
  ];

  const filteredExercises = exercisesPlan.filter((exercise) =>
    exercise.name.toUpperCase().includes(searchTerm.toUpperCase())
  );

  const handleThumbnailClick = (exercise) => {
    setSelectedExercise(exercise);
  };

  const handleCloseModal = () => {
    setSelectedExercise(null);
  };

  const listExercises = filteredExercises.map((item, index) => (
    <div key={index} className="exercise-item" onClick={() => handleThumbnailClick(item)}>
      <div className="ex-photo">
        {/* Użyj linku do miniatury z YouTube z odpowiedniego ćwiczenia */}
        <img src={`https://img.youtube.com/vi/${item.youtubeLink}/0.jpg`} alt="Nazwa ćwiczenia" />
      </div>
      <h2 className="exercise-name">{item.name}</h2>
    </div>
  ));


  return (
    <div>
      <div className="cont-menu">
        <div className="profile-cont">
          <div className="profile-avatar">
            <div className="avatar"></div>
            <h1>Wyszukiwarka ćwiczeń</h1>
          </div>
        </div>

        <div className="search-bar-cont">
          <input
            type="text"
            placeholder="Wpisz ćwiczenie z planu, które chcesz znaleźć..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="tutorials-cont">{listExercises}</div>
        </div>
      </div>

      <Modal
        isOpen={selectedExercise !== null}
        onRequestClose={handleCloseModal}
        contentLabel="Exercise Modal"
        overlayClassName="overlay"
        style={tutStyle}
      >
        <button className="close" onClick={handleCloseModal}>
          &times;
        </button>
        <h2>{selectedExercise && selectedExercise.name}</h2>
        {selectedExercise && <YouTube videoId={selectedExercise.youtubeLink} opts={youtubeOpts} />}
      </Modal>
    </div>
  );
};

export default Tutorials;
