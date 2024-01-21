import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './HealthTracker.css';
import {
  weightStyle,
  healthStyles,
  bmiModalContent,
  caloriesModalContent,
  bmrModalContent,
} from './HealthTrackerConstants';

const HealthTracker = (props) => {
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState(0);
  const [bmi, setBMI] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [activity, setActivity] = useState('');
  const [caloriesToConsume, setCaloriesToConsume] = useState(0);
  const [bmr, setBMR] = useState(0);
  const [weightGoal, setWeightGoal] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [caloriesModalOpen, setCaloriesModalOpen] = useState(false);
  const [bmrModalOpen, setBmrModalOpen] = useState(false);
  const [bmiModalOpen, setBmiModalOpen] = useState(false);

  useEffect(() => {
    // Pobierz dane o wadze i wzroście z props.userData.foundPersonalData
    const foundWeight = props.userData.foundPersonalData.weight || 0;
    const foundHeight = props.userData.foundPersonalData.height || 0;
    const foundWeightGoal = props.userData.foundPersonalData.weightGoal || 0;

    // Ustaw dane do obliczeń
    setGender(props.userData.foundPersonalData.gender || '');
    setWeight(foundWeight);
    setHeight(foundHeight);
    setAge(props.userData.foundPersonalData.age || 0);
    setActivity(props.userData.foundPersonalData.activity || '');

    // Obliczenia
    const calculatedBMI = calculateBMI(foundWeight, foundHeight);
    setBMI(calculatedBMI);

    const calculatedBMR = calculateBMR(foundWeight, foundHeight, props.userData.foundPersonalData.age, props.userData.foundPersonalData.gender);
    setBMR(calculatedBMR);

    const calculatedCaloriesToConsume = calculateCaloriesToConsume(calculatedBMR, props.userData.foundPersonalData.activity,props.userData.foundPersonalData.objective);
    setCaloriesToConsume(calculatedCaloriesToConsume);
  }, [props.userData]);

 const calculateBMI = (weight, height) => (weight / ((height / 100) ** 2)).toFixed(2);

 const calculateBMR = (weight, height, age, gender) => {
  if (gender === 'kobieta') {
    return (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age)).toFixed(2);
  } else {
    return (66 + (13.7 * weight) + (5 * height) - (6.8 * age)).toFixed(2);
  }
};

const calculateCaloriesToConsume = (bmr, activity, objective) => {
  let objectivecalories;
  if (objective === 'Redukcja') objectivecalories = -300;
  if (objective === 'Masa') objectivecalories = 300;
  if (objective === 'Sila') objectivecalories = 500;
  if (activity === 'praca siedząca, brak innych treningów, spacery tylko w wypadku potrzeb') return (bmr * 1.3 + objectivecalories).toFixed(2);
  if (activity === 'umiarkowana aktywność, kilka razy spacer w tygodniu') return (bmr * 1.6 + objectivecalories).toFixed(2);
  if (activity === 'duża aktywność, dodatkowe treningi, duża liczba spacerów') return (bmr * 1.9 + objectivecalories).toFixed(2);
};


  const calculateBMIColor = (bmi) => {
    if (bmi < 16) return '#3498db'; // Blue for underweight
    if (bmi >= 16 && bmi <= 18.4) return '#2ecc71'; // Green for normal weight
    if (bmi >= 18.5 && bmi <= 24.9) return '#2ecc71'; // Green for normal weight
    if (bmi >= 25 && bmi <= 29.9) return '#f39c12'; // Yellow for overweight
    return '#e74c3c'; // Red for obesity
  };

  const openModal = (modalSetter) => () => modalSetter(true);
  const closeModal = (modalSetter) => () => modalSetter(false);

  const handleGoalChange = (event) => {
    const parsedGoal = parseFloat(event.target.value);
    setWeightGoal(isNaN(parsedGoal) ? 0 : parsedGoal);
  };

  return (
    <div>
      <div className="cont-menu">
        <div className="profile-cont">
          <div className="profile-avatar">
            <div className="avatar"></div>
            <h1>Health Tracker</h1>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal(setIsModalOpen)} style={weightStyle}>
        <h2>Podaj swój cel wagi (w kg):</h2>
        <input className='ht-input' type="number" value={weightGoal} onChange={handleGoalChange} />
        <button className='modal-btn-ht' onClick={closeModal(setIsModalOpen)}>Zapisz</button>
      </Modal>

      <Modal isOpen={bmiModalOpen} onRequestClose={closeModal(setBmiModalOpen)} style={healthStyles}>
        {bmiModalContent}
      </Modal>

      <Modal isOpen={caloriesModalOpen} onRequestClose={closeModal(setCaloriesModalOpen)} style={healthStyles}>
        {caloriesModalContent}
      </Modal>

      <Modal isOpen={bmrModalOpen} onRequestClose={closeModal(setBmrModalOpen)} style={healthStyles}>
        {bmrModalContent}
      </Modal>

      <div className="health-tracker-container">
        <div className="health-tracker-circle" onClick={openModal(setIsModalOpen)}>
          <CircularProgressbar value={weight} maxValue={weightGoal} text={`${weight} kg`} />
          <div className="circle-label">Waga</div>
          <div className="circle-label">Cel: {weightGoal} kg</div>
        </div>
        <div className="health-tracker-circle" onClick={openModal(setBmiModalOpen)}>
          <CircularProgressbar
            value={bmi}
            maxValue={30}
            text={`${bmi}`}
            styles={{
              path: { stroke: calculateBMIColor(bmi) },
              trail: { stroke: '#d6d6d6' },
              text: { fill: calculateBMIColor(bmi), fontSize: '20px' },
            }}
          />
          <div className="circle-label">BMI</div>
        </div>
        <div className="health-tracker-circle" onClick={openModal(setCaloriesModalOpen)}>
          <CircularProgressbar value={caloriesToConsume} maxValue={3000} text={`${caloriesToConsume} kcal`} styles={{text: { fontSize: '13px' }, }} />
          <div className="circle-label">Kalorie</div>
        </div>
        <div className="health-tracker-circle" onClick={openModal(setBmrModalOpen)}>
          <CircularProgressbar value={bmr} maxValue={2500} text={`${bmr} kcal`} styles={{text: { fontSize: '13px' },}}/>
          <div className="circle-label">BMR</div>
        </div>
      </div>
    </div>
  );
}

export default HealthTracker;
