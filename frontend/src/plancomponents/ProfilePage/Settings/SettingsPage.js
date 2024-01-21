import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './Settings.css';
import { objektque } from '../FormRegister/questions.js';
import { personalDataFields, trainingDataFields, healthDataFields, securedDataFields, settingStyle, numberStyle } from './SettingsConstans.js';

const Settings = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [editableFields, setEditableFields] = useState([]);
  const [password, setPassword] = useState(props.userData.matchingUser.password);
  const [weight, setWeight] = useState(props.userData.foundPersonalData.weight);
  const [weightGoal, setWeightGoal] = useState(props.userData.foundPersonalData.weightGoal);
  const [height, setHeight] = useState(props.userData.foundPersonalData.height);
  const [objective, setObjective] = useState(props.userData.foundPersonalData.objective);
  const [level, setLevel] = useState(props.userData.foundPersonalData.level);
  const [days, setDays] = useState(props.userData.foundPersonalData.days);
  const [time, setTime] = useState(props.userData.foundPersonalData.time);
  const [activity, setActivity] = useState(props.userData.foundPersonalData.activity);
  const [priority, setPriority] = useState(props.userData.foundPersonalData.priority);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  

  const updatePersonalData = () => {
    props.updatePersonalData({
      weight,
      weightGoal,
      height,
      age : props.userData.foundPersonalData.age,
      gender: props.userData.foundPersonalData.gender,
      objective,
      level,
      days,
      time,
      activity,
      priority,
      uniqal_id: props.userData.foundPersonalData.uniqal_id
    });
    props.updatePassword({
      password,
      uniqal_id: props.userData.foundPersonalData.uniqal_id
    });
    alert('Dane zaktualizowane.');
  };

  const openModal = (fields) => {
    setIsModalOpen(true);
    setEditableFields(fields);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePersonalData();
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
  
    // Warunek dla pól typu radio
    if (type === 'radio' && !value) {
      return;
    }

    switch (name) {
      case 'weight':
        setWeight(value);
        break;
      case 'weightGoal':
        setWeightGoal(value);
        break;
      case 'height':
        setHeight(value);
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
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const renderInputs = () => {
    return editableFields.map((field) => (
      <div key={field}>
        <label>{changeLanguage(field)}:</label>
        {field === 'password' ? (
          <input
            type="password"
            name={field}
            value={formData[field] || ''}
            onChange={handleChange}
            
          />
        ) : (
          <div>
            {field === 'weight' || field === 'height' || field === 'weightGoal' ? (
              <input
                className='set-input'
                type="number"
                name={field}
                value={formData[field] || ''}
                onChange={handleChange}
              />
            ) : (
              renderRadioInputs(field)
            )}
          </div>
        )}
      </div>
    ));
  };

  const changeLanguage = (item) => {
    if(item === "first_name") return "imię";
    if(item === "last_name") return "nazwisko";
    if(item === "age") return "wiek";
    if(item === "gender") return "płeć";
    if(item === "objective") return "cel treningowy";
    if(item === "level") return "poziom";
    if(item === "days") return "ilość treningów w tygodniu";
    if(item === "time") return "czas treningu";
    if(item === "activity") return "aktywność pozatreningowa";
    if(item === "priority") return "priorytet";
    if(item === "weight") return "waga";
    if(item === "weightGoal") return "Waga docelowa";
    if(item === "height") return "wzrost";
    if(item === "password") return "hasło";
    else return item;
  }
  

  const renderDataList = (dataList, fields) =>
  dataList.map((item) => (
    <div key={item} className="task-info">
      {changeLanguage(item)}: <span>{fields.includes(item) ? (item === 'password' ? '**********' : (props.userData.matchingUser[item] || props.userData.foundPersonalData[item] || '---')) : (props.userData.matchingUser[item] || props.userData.foundPersonalData[item])}</span>
      {fields.includes(item) && (
        <button className="settings-change-btn" onClick={() => openModal([item])}>
          Zmiana
        </button>
      )}
    </div>
  ));




  const renderRadioInputs = (field) => {
    const questionObj = objektque.find((obj) => obj.nameid === field);

    if (questionObj && questionObj.answers && Array.isArray(questionObj.answers)) {
      return (
        <>
          {questionObj.answers.map((answer, index) => (
            <div key={index} className='item-input-ans'>
              <input
                type="radio"
                name={field}
                id={`answer${index}`}
                value={answer}
                onChange={handleChange}
                checked={formData[field] === answer}
              />
              <label htmlFor={`answer${index}`}>{answer}</label>
            </div>
          ))}
        </>
      );
    }

    return null;
  };

  return (
    <div>
      <div className="cont-menu">
        <div className="profile-cont">
          <div className="profile-avatar">
            <div className="avatar"></div>
            <h1>Ustawienia</h1>
          </div>
          <div className="task-menu">
            <div className="task-item">
              Dane osobowe
              <div className="task-line"></div>
              {renderDataList(personalDataFields, [])}
            </div>

            <div className="task-item">
              Dane treningowe
              <div className="task-line"></div>
              {renderDataList(trainingDataFields, ['objective', 'level', 'days', 'time', 'activity', 'priority'])}
            </div>

            <div className="task-item">
              Dane zdrowotne
              <div className="task-line"></div>
              {renderDataList(healthDataFields, ['weight','weightGoal','height'])}
            </div>

            <div className="task-item">
              Prywatność
              <div className="task-line"></div>
              {renderDataList(securedDataFields, ['password'])}
            </div>
            
          </div>
          <button className='btn-set-save-all' onClick={handleSubmit}>ZAPISZ ZMIANY</button>
        </div>
        
      </div>
      

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Edycja danych"
        style={editableFields.includes('weight') || editableFields.includes('height') ? numberStyle : settingStyle}
      >
        {renderInputs()}
        <div>
          <button className='settings-modal-btn' onClick={closeModal}>Zapisz zmiany</button>
          <button className='settings-modal-btn' onClick={closeModal}>Anuluj</button>
        </div>
      </Modal>
    </div>
  );
};

export default Settings;


