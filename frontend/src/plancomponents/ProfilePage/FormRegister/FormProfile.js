import React, { useState } from 'react';
import Header from '../../Home/Header/Header.js';
import { objektque } from './questions.js';
import './RegForm.css';

const RegForm = (props) => {
  const [weight, setWeight] = useState('');
  const [weightGoal, setWeightGoal] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [objective, setObjective] = useState('');
  const [level, setLevel] = useState('');
  const [days, setDays] = useState('');
  const [time, setTime] = useState('');
  const [activity, setActivity] = useState('');
  const [priority, setPriority] = useState('');

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswerChange = (value) => {
    const currentQuestion = objektque[currentQuestionIndex].nameid;

    switch (currentQuestion) {
      case 'weight':
        setWeight(value);
        break;
      case 'weightGoal':
        setWeightGoal(value);
        break;
      case 'height':
        setHeight(value);
        break;
      case 'age':
        setAge(value);
        break;
      case 'gender':
        setGender(value);
        break;
      case 'objective':
        setObjective(value);
        break;
      case 'level':
        setLevel(value);
        break;
      case 'days':
        setDays(value);
        break;
      case 'time':
        setTime(value);
        break;
      case 'activity':
        setActivity(value);
        break;
      case 'priority':
        setPriority(value);
        break;
      default:
        break;
    }
  };

  const addPersonalData = () => {

    
    const filledFields = [weight, weightGoal, height, age, gender, objective, level, days, time, activity, priority];
    const requiredFields = ['weight','weightGoal', 'height', 'age', 'gender', 'objective', 'level', 'days', 'time', 'activity', 'priority'];
    const missingFields = requiredFields.filter((field) => field === '');

    if (missingFields.length === 0) {
      // Prześlij dane do komponentu nadrzędnego
      props.addPersonalData({
        weight,
        weightGoal,
        height,
        age,
        gender,
        objective,
        level,
        days,
        time,
        activity,
        priority
      });
      alert('Registration done.');
    } else {
      console.error(`Missing required fields: ${missingFields.join(', ')}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPersonalData();
  };

  const showQuestions = () => {
    if (currentQuestionIndex < objektque.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      addPersonalData();
    }
  };

  const renderAnswerInputs = () => {
    const currentQuestion = objektque[currentQuestionIndex];
    if (currentQuestion.answers === 'number') {
      return (
        <input
          className='forms-num-input'
          type="number"
          name={currentQuestion.nameid}
          id={`answer${currentQuestionIndex}`}
          value={eval(currentQuestion.nameid) || ''}
          onChange={(e) => handleAnswerChange(e.target.value)}
        />
      );
    } else {
      return currentQuestion.answers.map((answer, index) => (
        <div key={index} className='item-input-ans'>
          <input
            type="radio"
            name={currentQuestion.nameid}
            id={`answer${index}`}
            value={answer}
            onChange={() => handleAnswerChange(answer)}
            checked={eval(currentQuestion.nameid) === answer}
          />
          <label htmlFor={`answer${index}`}>{answer}</label>
        </div>
      ));
    }
  };

  return (
    <div>
      <Header loginUser={(user) => this.loginUser(user)} addUser={(user) => this.addUser(user)} />
      <div className="main-form">
        <div className="main-container-form">
          <div className="cont-toogle-btn">{objektque[currentQuestionIndex].question}</div>
          <div className="cont-answers">
            <form onSubmit={handleSubmit}>
              <div className="inputs-ans">{renderAnswerInputs()}</div>
            </form>
          </div>
          <div className="cont-final-btn">
            {currentQuestionIndex === objektque.length - 1 ? (
              <input type="submit" id="btn-log" value="Submit" onClick={handleSubmit} />
            ) : (
              <button onClick={showQuestions}>Dalej</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegForm;
