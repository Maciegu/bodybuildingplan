import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlanCreator from '../PlanPage/PlanCreator.js';

const Monitor = (props) => {
  const [uniqal_id, setUniqal_id] = useState(props.matchingUser.uniqal_id);

  const month_trainings = props.foundTrainingTrackData;


  
  
 
  

  const createPlan = () => {
    const days = Number(props.foundPersonalData.days);
    const priority = props.foundPersonalData.priority;
    const { foundWorkout, planName } = PlanCreator(days, priority);

    props.addTrainingData({
      plan: foundWorkout,
      uniqal_id,
      planName,
    });
  }

  const updatePlan = () => {
    const days = Number(props.foundPersonalData.days);
    const priority = props.foundPersonalData.priority;
    const { foundWorkout, planName } = PlanCreator(days, priority);

    props.updateTrainingData({
      plan: foundWorkout,
      uniqal_id,
      planName,
    });
    alert("Plan updated");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createPlan();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updatePlan();
  };

  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState(0);
  const [bmi, setBMI] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [activity, setActivity] = useState('');
  const [caloriesToConsume, setCaloriesToConsume] = useState(0);
  const [bmr, setBMR] = useState(0);
  const [trainingCount, setTrainingCount] = useState(0); // Dodajemy nowy stan dla liczby treningów
  const [randomExercises, setRandomExercises] = useState([]);
  const [usedExerciseNames, setUsedExerciseNames] = useState([]);



  useEffect(() => {
    // Pobierz dane o wadze i wzroście z props.foundPersonalData
    const foundWeight = props.foundPersonalData.weight || 0;
    const foundHeight = props.foundPersonalData.height || 0;
    const foundWeightGoal = props.foundPersonalData.weightGoal || 0;

    // Ustaw dane do obliczeń
    setGender(props.foundPersonalData.gender || '');
    setWeight(foundWeight);
    setHeight(foundHeight);
    setAge(props.foundPersonalData.age || 0);
    setActivity(props.foundPersonalData.activity || '');

    const calculatedBMR = calculateBMR(foundWeight, foundHeight, props.foundPersonalData.age, props.foundPersonalData.gender);
    setBMR(calculatedBMR);

    const calculatedCaloriesToConsume = calculateCaloriesToConsume(calculatedBMR, props.foundPersonalData.activity,props.foundPersonalData.objective);
    setCaloriesToConsume(calculatedCaloriesToConsume);

    const calculatedTrainingsLength = howManyTrainingThisMonth();
    setTrainingCount(calculatedTrainingsLength);

    const showExercises =  getTrainingPlanForDate();
    setRandomExercises(showExercises);
    
  }, [props]);

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
    if (activity === 'praca siedząca, brak innych treningów, spacery tylko w wypadku potrzeb') return (bmr * 1.3 + objectivecalories).toFixed(0);
    if (activity === 'umiarkowana aktywność, kilka razy spacer w tygodniu') return (bmr * 1.6 + objectivecalories).toFixed(0);
    if (activity === 'duża aktywność, dodatkowe treningi, duża liczba spacerów') return (bmr * 1.9 + objectivecalories).toFixed(0);
  };

  const howManyTrainingThisMonth = () => {
    const currentDate = new Date();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const firstDayOfNextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);

    let trainingsCount = 0;

    month_trainings.forEach(training => {
      const trainingDate = new Date(training.data);
      if (trainingDate >= firstDayOfMonth && trainingDate < firstDayOfNextMonth) {
        trainingsCount++;
      }
    });
    return trainingsCount;
  };


  const getTrainingPlanForDate = () => {
    const matchingTraining = month_trainings.find(
      item => item.plan && item.plan.length > 0
    );
  
    const plan = matchingTraining && Array.isArray(matchingTraining.plan) ? matchingTraining.plan : [];
  
    const getRandomExercise = () => {
      if (plan.length === 0) {
        return { name: 'Brak ćwiczeń', weight: 0 };
      }
  
      const unusedExercises = plan.filter(exercise => !usedExerciseNames.includes(exercise.name));
  
      if (unusedExercises.length === 0) {
        // Jeśli wszystkie ćwiczenia zostały użyte, zresetuj listę użytych ćwiczeń
        setUsedExerciseNames([]);
      }
  
      const randomIndex = Math.floor(Math.random() * unusedExercises.length);
      const randomExercise = unusedExercises[randomIndex];
  
      return {
        name: randomExercise.name || 'Brak nazwy',
        weight: randomExercise.weight || 0,
      };
    };
  
    // Zwróć tablicę trzech losowych ćwiczeń
    return Array.from({ length: 3 }, (_, index) => getRandomExercise());
  };
  

  
  const userPlanForDate = getTrainingPlanForDate();


  

  const generateTileData = () => {
    return [
      {
        name: 'Plan Page',
        title: props.foundTrainingData ? props.foundTrainingData.planName : 'Brak nazwy planu',
        desc: 'TAK TRZYMAJ! W TYM MIESIĄCU LICZBA TWOICH TRENINGÓW WYNOSI: ',
        icon: '🏋️‍♂️',
        count: howManyTrainingThisMonth(),
        total: 20,
      },
      {
        name: 'Gym Tracker',
        title: 'Gym Tracker',
        desc: 'TAK DALEJ! TWÓJ PROGRES WYNOSI: ',
        icon: '📊',
        count: 100,
        total: 100,
      },
      {
        name: 'Results',
        title: 'Wyniki',
        desc: 'OSTATNIE WYNIKI Z TEGO TYGODNIA:',
        icon: '🏆',
        count: 8,
        total: 20,
      },
      {
        name: 'Health Tracker',
        title: 'Health Tracker',
        desc: 'Dzienna liczba kalorii: ',
        icon: '❤️',
        count: calculateCaloriesToConsume,
        total: 20,
      },
      {
        name: 'Tutorial',
        title: 'Tutorial',
        desc: '',
        icon: '📚',
        count: 5,
        total: 20,
      },
      {
        name: 'Settings',
        title: 'Ustawienia',
        desc: 'Zaktualizuj swoje cele, wage lub parametry treningowe!',
        icon: '⚙️',
        total: 20,
      },
    ];
  };

  const tilesData = generateTileData();

  return (
    <div className="cont-menu">
      <div className="profile-cont">
        <div className="profile-avatar">
          <div className="avatar"></div>
          <h1>Witaj {props.matchingUser ? props.matchingUser.login : 'Użytkowniku'}!</h1>
        </div>
        <button className='btn-gen-plan' onClick={handleSubmit}>GENERUJ PLAN</button>
        <button className='btn-gen-plan' onClick={handleUpdate}>ZAKTUALIZUJ PLAN</button>
        <div className="tiles-container">
          {tilesData.map((tile) => (
            <div key={tile.title} className="tile">
              <div className="tile-icon">{tile.icon}</div>
              <div className="tile-content">
                <div className="tile-title">{tile.title}</div>
                <div className="tile-count">
                  {tile.desc}
                  {tile.name === 'Plan Page' ? (
                    <div className="progress-circle">
                      <CircularProgressbar value={(tile.count / tile.total) * 100} text={`${tile.count}/${tile.total}`} />
                    </div>
                  ) : tile.name === 'Tutorial' ? (
                    <div className="tutorial-tile">
                      <div className="tutorial-search">
                        <input type="text" placeholder="Wyszukaj ćwiczenie" />
                      </div>
                      <div className="tutorial-player">
                        <iframe
                          width="80%"
                          height="215"
                          src="https://www.youtube.com/embed/VIDEO_ID"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  ) : tile.name === 'Gym Tracker' ? (
                    <div className="progress-circle">
                      <CircularProgressbar value={(tile.count / tile.total) * 100} text={`${tile.count}%`} />
                    </div>
                  ) : tile.name === 'Results' ? (
                    <div className="results-tile">
                      {getTrainingPlanForDate().map((exercise, index) => (
              <div key={index}>
                {exercise.name}: {exercise.weight}kg
              </div>
            ))}
                      

                    </div>
                  ) : tile.name === 'Health Tracker' ? (
                    <div className="health-tile">{calculateCaloriesToConsume(bmr, activity, props.foundPersonalData.objective)}</div>
                    ) : (
                    tile.count
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Monitor;
