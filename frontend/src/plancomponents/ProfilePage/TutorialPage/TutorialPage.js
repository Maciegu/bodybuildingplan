import React, { useState } from 'react';
import Modal from 'react-modal';
import YouTube from 'react-youtube';
import './TutorialPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { exercises_plan } from '../PlanPage/exercises.js';

const MyStyle={
    overlay: {
      // backgroundColor: 'rgba(0, 0, 0, 0.5)', // kolor tła overlay
    },
    content: {
      // background: 'transparent',
      display: 'flex',
      flexDirection:'column',
      justifyContent: 'center',
      textAlign: 'center',
      border: "3px solid black",
      maxWidth: '35%',
      width: 'auto',
      maxHeight: '45%',
      margin: 'auto',
    },
  }



const Tutorials = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExercise, setSelectedExercise] = useState(null);

  const filteredExercises = exercises_plan.filter((exercise) =>
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
        <img src="https://img.youtube.com/vi/8_33og5lN-Y/0.jpg" alt="Nazwa ćwiczenia" />

      </div>
      <h2 className="ex-name">{item.name}</h2>
    </div>
  ));

  const youtubeOpts = {
    height: '315',
    width: '560',
    playerVars: {
      autoplay: 1,
    },
  };

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
        style={MyStyle}
      >
        <button className="close" onClick={handleCloseModal}>
          &times;
        </button>
        <h2>{selectedExercise && selectedExercise.name}</h2>
        {selectedExercise && <YouTube videoId="8_33og5lN-Y" opts={youtubeOpts} />}
      </Modal>
    </div>
  );
};

export default Tutorials;
