import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { exercises_plan } from './exercises.js';
import {
  CwiczeniaNaKlatke,
  CwiczeniaNaBarki,
  CwiczeniaNaPlecy,
  CwiczeniaNaBiceps,
  CwiczeniaNaTriceps,
  CwiczeniaNaBrzuch,
  CwiczeniaNaNogi,
} from './AllexercisesForPC.js';
import { styles, renderRpeModalContent } from './PlanPageConstans.js';
import './PlanPage.css';

const PlanPage = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState('');
  const [rpeModalIsOpen, setRpeModalIsOpen] = useState(false);
  const [alternativeExercises, setAlternativeExercises] = useState([]);

  const days = props.userData.foundPersonalData.days;

  const plan = props.userData.foundTrainingData.plan;

  const openRpeModal = () => {
    setRpeModalIsOpen(true);
  };

  const closeRpeModal = () => {
    setRpeModalIsOpen(false);
  };

  const openModal = (exercise) => {
    setSelectedExercise(exercise);
    setAlternativeExercises(findAlternativeExercises(plan, exercise));
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedExercise('');
    setModalIsOpen(false);
  };

  const handleExerciseChange = (newExercise) => {
    console.log(`Zamieniono ćwiczenie ${selectedExercise} na ${newExercise}`);
    closeModal();
  };



  const renderPlan = () => {
    const { plan } = props.userData.foundTrainingData;

    if (!plan || !Array.isArray(plan)) {
      return null; // lub inny komunikat błędu, jeśli plan nie istnieje lub nie jest tablicą
    }

    return plan.map((dayObj) => {
      const day = dayObj.day;
      const exerciseNames = Object.keys(dayObj)
        .filter((key) => key !== 'day') // Pomijamy pole 'day'
        .map((key) => dayObj[key]); // Pobieramy wartości ćwiczeń

      return (
        <div className='to-put-bordertop' key={day}>
          <h2>Dzień {day}</h2>
          {exerciseNames.map((exercise, index) => (
            <React.Fragment key={index}>
              <div className="plan-row">
                <div className='nazwa-cwiczenia'><span>{exercise}</span></div>
                <div><span>3</span></div>
                <div><span>8-12 </span></div>
                <div><span>8</span></div>
                <div><button className="exercise-change-btn" onClick={() => openModal(exercise)}>
                  Zmień
                </button></div>
              </div>
            </React.Fragment>
          ))}
        </div>
      );
    });
};

  

  const renderPlanHeadings = () => (
    <div className="rzad-pierwszy">
      <div><span>ćwiczenie</span></div>
      <div><span>ILOŚĆ SERII</span></div>
      <div><span>POWTÓRZENIA</span></div>
      <div onClick={openRpeModal}><span id="span-rpe">RPE</span></div>
      <div><span>ZMIANA</span></div>
    </div>
  );

  const renderPlanDays = () => {
    const daysCount = days || 4; // Domyślnie 4 dni, jeśli wartość nie jest dostępna
  
    return Array.from({ length: daysCount }, (_, index) => {
      const dayNumber = index + 1;
      const dayName = `Dzień ${dayNumber}`;
  
      return (
        <div key={index}>
          <h2>{dayName}</h2>
          {renderPlanHeadings()}
          {renderPlan()}
        </div>
      );
    });
  };

  const findAlternativeExercises = (plan, selectedExercise) => {
    const alternativeExercises = [];
  
    // Map through the plan objects
    plan.forEach((dayObj) => {
      Object.keys(dayObj).forEach((key) => {
        // Pomijamy pole 'day'
        if (key !== 'day' && dayObj[key] === selectedExercise) {
          const exerciseName = dayObj[key];
  
          // Pobierz kategorie z klucza (np. "klatka1" -> "klatka")
          const category = key.replace(/\d/g, ''); // Usuń cyfry z klucza
  
          // Importuj odpowiednią tablicę ćwiczeń na podstawie kategorii
          const exercisesArray = getExercisesArrayByCategory(category);
  
          // Sprawdź, czy wybrane ćwiczenie jest w tej kategorii
          const selectedExerciseTarget = exercisesArray.find((exercise) => exercise.name === exerciseName)?.target;
  
          if (selectedExerciseTarget) {
            // Wyszukaj ćwiczenia o tej samej kategorii (bez uwzględniania wybranego ćwiczenia)
            const filteredExercises = exercisesArray
              .filter((exercise) => exercise.target === selectedExerciseTarget && exercise.name !== selectedExercise);
  
            // Losowo wybierz 3 alternatywne ćwiczenia (maksymalnie 3)
            const randomAlternatives = filteredExercises.sort(() => Math.random() - 0.5).slice(0, 3);
  
            // Dodaj alternatywy do wynikowej tablicy
            alternativeExercises.push(...randomAlternatives);
          }
        }
      });
    });
  
    // Zwróć maksymalnie trzy unikalne alternatywy
    return [...new Set(alternativeExercises)].slice(0, 3);
  };
  
  
  
  
  
  
 // Funkcja do pobierania tablicy ćwiczeń na podstawie kategorii
const getExercisesArrayByCategory = (category) => {
  switch (category) {
    case 'klatka':
      return CwiczeniaNaKlatke;
    case 'plecy':
      return CwiczeniaNaPlecy;
    case 'biceps':
      return CwiczeniaNaBiceps;
    case 'triceps':
      return CwiczeniaNaTriceps;
    case 'barki':
      return CwiczeniaNaBarki;
    case 'brzuch':
      return CwiczeniaNaBrzuch;
    case 'nogi_ogolne': return CwiczeniaNaNogi;
    case 'nogi_tylek': return CwiczeniaNaNogi;
    case 'nogi_tyl': return CwiczeniaNaNogi;
    case 'nogi_przod': return CwiczeniaNaNogi;
    case 'lydki':
      return CwiczeniaNaNogi;

    // Dodaj inne kategorie w razie potrzeby
    default:
      console.error(`Unknown category: ${category}`);
      return [];
  }
};

  

  return (
    <div>
      <div className="cont-menu">
        <div className="profile-cont">
          <div className="profile-avatar">
            <div className="avatar"></div>
            <h1>{props.userData.foundTrainingData.planName}</h1>
          </div>
          <div className="plan-cont">
            {renderPlanHeadings()}
            {renderPlan()}
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Zmień Ćwiczenie Modal"
        style={styles.planPageModal}
      >
        <div className='modal-cont'>
          <h2>Zmień Ćwiczenie</h2>
          <p>Wybierz nowe ćwiczenie, które zastąpi {selectedExercise}:</p>
          {alternativeExercises.map((exercise, index) => (
            <button
              key={index}
              className='planp-modal-btn'
              onClick={() => handleExerciseChange(exercise.name)}
            >
              {exercise.name}
            </button>
          ))}
          <button className='planp-modal-btn' onClick={closeModal}>Anuluj</button>
        </div>
      </Modal>
      <Modal
        isOpen={rpeModalIsOpen}
        onRequestClose={closeRpeModal}
        contentLabel="Modal RPE"
        style={styles.rpeModal}
      >
        {renderRpeModalContent()}
      </Modal>
    </div>
  );
};

export default PlanPage;
