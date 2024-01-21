import React, { useState } from 'react';
import Calendar from './Calendar';
import PlanOptions from './PlanOptions';
import './GymTracker.css';



const GymTracker = (props) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedPlan, setSelectedPlan] = useState('default');
  const [results, setResults] = useState([]);
  const [trainingTrackData, setTrainingTrackData] = useState(props.userData.foundTrainingData);
  const days = props.userData.foundPersonalData.days;
  const plan = props.userData.foundTrainingData.plan;
  const uniqal_id = props.userData.foundPersonalData.uniqal_id;
  const planName = props.userData.foundTrainingData.planName;

  const addTrainingTrack = () => {
    const formattedDate = selectedDate.toLocaleDateString('en-CA'); // 'en-CA' odpowiada za format YYYY-MM-DD

    props.addTrainingTrack({
      plan: separatedDays[selectedPlan].map((exercise, exerciseIndex) => {
        // Create an exercise object for each exercise in the plan
        return {
          name: exercise.name,
          weight: results[exerciseIndex]?.weight || 0, // Use the weight from user input or default to 0
          set1: results[exerciseIndex]?.sets[0] || 0, // Use the reps from user input or default to 0
          set2: results[exerciseIndex]?.sets[1] || 0,
          set3: results[exerciseIndex]?.sets[2] || 0,
        };
      }),
      uniqal_id,
      planName: `${planName} ${selectedPlan}`,
      data: formattedDate,
    });
    setResults([]);

  }

  const updateTrainingTrack = () => {
    const formattedDate = selectedDate.toLocaleDateString('en-CA'); // 'en-CA' odpowiada za format YYYY-MM-DD

    props.updateTrainingTrack({
      plan: separatedDays[selectedPlan].map((exercise, exerciseIndex) => {
        // Create an exercise object for each exercise in the plan
        return {
          name: exercise.name,
          weight: results[exerciseIndex]?.weight || 0, // Use the weight from user input or default to 0
          set1: results[exerciseIndex]?.sets[0] || 0, // Use the reps from user input or default to 0
          set2: results[exerciseIndex]?.sets[1] || 0,
          set3: results[exerciseIndex]?.sets[2] || 0,
        };
      }),
      uniqal_id,
      planName: `${planName} ${selectedPlan}`,
      data: formattedDate,
    });
    setResults([]);

  }

  const handleDateChange = (date) => setSelectedDate(date);
  const handlePlanChange = (plan) => setSelectedPlan(plan);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTrainingTrack();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateTrainingTrack();
  };


  function separateDaysFromPlan(plan) {
    if (!plan || !Array.isArray(plan)) {
      return null;
    }
  
    const separatedDays = plan.reduce((acc, dayObj, index) => {
      const dayKey = String.fromCharCode(65 + index); // A, B, C, ...
      const exerciseNames = Object.keys(dayObj)
        .filter((key) => key !== 'day')
        .map((key) => ({
          name: dayObj[key],
          sets: 3, // Domyślna liczba serii, możesz dostosować
          reps: '8-12', // Domyślna liczba powtórzeń, możesz dostosować
        }));
  
      acc[dayKey] = exerciseNames;
      return acc;
    }, {});
  
    return separatedDays;
  }
  
  
  const separatedDays = separateDaysFromPlan(plan);


  const handleSaveResults = () => {
    console.log(`Zapisano wyniki dla daty ${selectedDate} i planu ${selectedPlan}:`, results);
    setResults([]);
  };

  const handleWeightChange = (exerciseIndex, value) => {
    const updatedResults = [...results];
    const exercise = separatedDays[selectedPlan][exerciseIndex];
    updatedResults[exerciseIndex] = {
      sets: [],
      reps: exercise.reps,
      weight: value,
    };
    setResults(updatedResults);
  };

  const handleSetsChange = (exerciseIndex, setIndex, value) => {
    const updatedResults = [...results];
    const exercise = separatedDays[selectedPlan][exerciseIndex];
    updatedResults[exerciseIndex] = {
      sets: [...(updatedResults[exerciseIndex]?.sets || [])],
      reps: exercise.reps,
      weight: updatedResults[exerciseIndex]?.weight,
    };
    updatedResults[exerciseIndex].sets[setIndex] = value;
    setResults(updatedResults);
  };

  const renderExercises = (plan) => (
    plan.map((item, exerciseIndex) => (
      <div className="rzad-danych" key={exerciseIndex}>
        <div className='nazwa-cwiczenia'><span>{item.name}</span></div>
        <div>
          <input
            type="number"
            maxLength="3"
            placeholder="Ciężar [kg]"
            value={results[exerciseIndex]?.weight || ''}
            onChange={(e) => handleWeightChange(exerciseIndex, e.target.value)}
          />
        </div>
        {Array.from({ length: item.sets }, (_, setIndex) => (
          <div key={setIndex}>
            <input
              type="number"
              maxLength="2"
              placeholder={`Ilość powtórzeń`}
              value={results[exerciseIndex]?.sets[setIndex] || ''}
              onChange={(e) => handleSetsChange(exerciseIndex, setIndex, e.target.value)}
            />
          </div>
        ))}
      </div>
    ))
  );

  return (
    <div>
      <div className="cont-menu">
        <div className="profile-cont">
          <div className="profile-avatar">
            <div className="avatar"></div>
            <h1>GYM TRACKER</h1>
          </div>
        </div>
        <div className="results-cont">
          <Calendar onDateChange={handleDateChange} />
          <PlanOptions selectedPlan={selectedPlan} onSelectPlan={handlePlanChange} days={days} />
          {selectedPlan !== 'default' && (
            <>
              <h2>Plan treningowy - Plan {selectedPlan}</h2>
              <div className="rzad-danych" id="first-rzad">
                <div><span>ĆWICZENIE</span></div>
                <div><span>CIĘŻAR</span></div>
                {Array.from({ length: separatedDays[selectedPlan][0].sets }, (_, setIndex) => (
                  <div key={setIndex}><span>SERIA {setIndex + 1}</span></div>
                ))}
              </div>
              {renderExercises(separatedDays[selectedPlan])}
              <button className='save-plan' onClick={handleSubmit}>Zapisz</button>
              <button className='update-plan' onClick={handleUpdate}>Aktualizuj</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default GymTracker;
