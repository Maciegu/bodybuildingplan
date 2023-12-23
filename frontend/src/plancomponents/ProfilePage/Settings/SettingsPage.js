// import './Settings.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faDumbbell } from '@fortawesome/free-solid-svg-icons';

// const personal_data = ['imie','nazwisko','wiek','plec'];
// const training_data = ['cel','stopień zaawansowania','dni treningowe', 'czas na trening', 'aktywność pozatreningowa','priorytet','typ planu','ilość dni na planie'];
// const health_data = ['waga','wzrost'];
// const secured_data = ['login','email','password'];

// const listPersonalData = personal_data.map((item) => <div class="task-info">{item}: <span>XXX</span></div> );
// const listTrainingData = training_data.map((item) => <div class="task-info">{item}: <span>YYY</span></div> );
// const listHealthData = health_data.map((item) => <div class="task-info">{item}: <span>Norma</span></div> );
// const listSecuredData = secured_data.map((item) => <div class="task-info">{item}: <span>*****</span></div> );

// function Settings(){
//     return(
//         <div>
//             <div class="cont-menu">
//                 <div class="profile-cont">
//                     <div class="profile-avatar">
//                         <div class="avatar"></div>
//                         <h1>Ustawienia</h1>
//                     </div>
//                     <div class="task-menu">

//                         <div class="task-item">Dane osobowe
//                             <div class="task-line"></div>{listPersonalData} 
                              
//                         </div>

//                         <div class="task-item">Dane treningowe 
//                             <div class="task-line"></div>{listTrainingData}
//                             <div className='chng-tn'>
//                                 <button class="exercise-change-btn">Zmień</button>
//                             </div>
//                         </div>

//                         <div class="task-item">Dane zdrowotne
//                             <div class="task-line"></div>{listHealthData}
//                             <div className='chng-tn'>
//                                 <button class="exercise-change-btn">Zmień</button>
//                             </div>
//                         </div>

//                         <div class="task-item">Prywatność
//                             <div class="task-line"></div>{listSecuredData}
//                             <div className='chng-tn'>
//                                 <button class="exercise-change-btn">Zmień</button>
//                             </div>
//                         </div>

//                     </div>              
//                 </div>         
//             </div>
//         </div>
//     )
// }

// export default Settings;

import React, { useState } from 'react';
import Modal from 'react-modal';

const personal_data = ['imie', 'nazwisko', 'wiek', 'plec'];
const training_data = ['cel', 'stopień zaawansowania', 'dni treningowe', 'czas na trening', 'aktywność pozatreningowa', 'priorytet', 'typ planu', 'ilość dni na planie'];
const health_data = ['waga', 'wzrost'];
const secured_data = ['login', 'email', 'password'];

const Settings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [editableFields, setEditableFields] = useState([]);

  const openModal = (fields) => {
    setIsModalOpen(true);
    setEditableFields(fields);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({});
  };

  const handleUpdate = () => {
    // Dodaj kod do aktualizacji danych na stronie zgodnie z wprowadzonymi danymi
    console.log('Nowe dane:', formData);
    closeModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const renderInputs = () => {
    return editableFields.map((field) => (
      <div key={field}>
        <label>{field}:</label>
        <input
          type={(field === 'password') ? 'password' : 'text'}
          name={field}
          value={formData[field] || ''}
          onChange={handleChange}
        />
      </div>
    ));
  };

  const renderDataList = (dataList, fields) =>
    dataList.map((item) => (
      <div key={item} className="task-info">
        {item}: <span>{(fields.includes(item)) ? '***' : '---'}</span>
        {(fields.includes(item)) && (
          <button className="exercise-change-btn" onClick={() => openModal([item])}>
            Zmień
          </button>
        )}
      </div>
    ));

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
              {renderDataList(personal_data, [])}
            </div>

            <div className="task-item">
              Dane treningowe
              <div className="task-line"></div>
              {renderDataList(training_data, ['typ planu', 'ilość dni na planie'])}
            </div>

            <div className="task-item">
              Dane zdrowotne
              <div className="task-line"></div>
              {renderDataList(health_data, [])}
            </div>

            <div className="task-item">
              Prywatność
              <div className="task-line"></div>
              {renderDataList(secured_data, ['password'])}
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Edycja danych"
      >
        <h2>Edycja danych</h2>
        {renderInputs()}
        <button onClick={handleUpdate}>Zapisz zmiany</button>
        <button onClick={closeModal}>Anuluj</button>
      </Modal>
    </div>
  );
};

export default Settings;
