import React, { useState } from 'react';
import Modal from 'react-modal';

import './HealthTracker.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDumbbell } from '@fortawesome/free-solid-svg-icons';

function calculateBMIColor(bmi) {
  if (bmi < 16) {
    return '#3498db'; // Blue for underweight
  } else if (bmi >= 16 && bmi <= 18.4) {
    return '#2ecc71'; // Green for normal weight
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return '#2ecc71'; // Green for normal weight
  } else if (bmi >= 25 && bmi <= 29.9) {
    return '#f39c12'; // Yellow for overweight
  } else {
    return '#e74c3c'; // Red for obesity
  }
}

const MyStyle={
  overlay: {
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // kolor tła overlay
  },
  content: {
    // background: 'transparent',
    textAlign: 'center',
    border: '10px solid black',           // Usuń obramowanie modala
    padding: 0,     
    maxWidth: '20%',
    width: 'auto',
    maxHeight: '25%',
    margin: 'auto',
  },
}

const difStyle={

  content: {
    // background: 'transparent',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    textAlign: 'center',
    border: '10px solid black',           // Usuń obramowanie modala
    padding: 0,     
    maxWidth: '70%',
    width: 'auto',
    maxHeight: '35%',
    margin: 'auto',
  },
}

function HealthTracker() {
  const weight = 70; // Example weight in kg
  const bmi = 22; // Example BMI
  const caloriesToConsume = 3000; // Example calories to consume
  const bmr = 2500; // Example BMR
  const [weightGoal, setWeightGoal] = useState(80);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [caloriesModalOpen, setCaloriesModalOpen] = useState(false);
  const [bmrModalOpen, setBmrModalOpen] = useState(false);
  const [bmiModalOpen, setBmiModalOpen] = useState(false);

  const openWeightGoalModal = () => {
    setIsModalOpen(true);
  };

  const closeWeightGoalModal = () => {
    setIsModalOpen(false);
  };

  const handleGoalChange = (event) => {
    const parsedGoal = parseFloat(event.target.value);
    setWeightGoal(isNaN(parsedGoal) ? 0 : parsedGoal);
  };

  const openCaloriesModal = () => {
    setCaloriesModalOpen(true);
  };

  const closeCaloriesModal = () => {
    setCaloriesModalOpen(false);
  };

  const openBmrModal = () => {
    setBmrModalOpen(true);
  };

  const closeBmrModal = () => {
    setBmrModalOpen(false);
  };

  const openBMIModal = () => {
    setBmiModalOpen(true);
  };

  const closeBMIModal = () => {
    setBmiModalOpen(false);
  };



  return (
    <div>
      <div className="cont-menu">
        <div className="profile-cont">
          <div className="profile-avatar">
            <div className="avatar"></div>
            <h1>Witaj Maciegu!</h1>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onRequestClose={closeWeightGoalModal} style={MyStyle}>
        <h2>Podaj swój cel wagi (w kg):</h2>
        <input type="number" value={weightGoal} onChange={handleGoalChange} />
        <button onClick={closeWeightGoalModal}>Zapisz</button>
      </Modal>
      <Modal isOpen={bmiModalOpen} onRequestClose={closeBMIModal} style={difStyle}>
        <h4>
        BMI jest jednym z ważnych wskaźniów określających nasz stan fizyczny, ale niestety nie wystarczającym. Bardzo ważnym uzupełnieniem BMI jest wskaźnik ilości tłuszczu brzusznego - zbyt duży może oznaczać niebezpieczną otyłość brzuszną i to nawet przy prawidłowym BMI! Ponadto, paradoksalnie, badania naukowe wskazują, że osoby z lekką nadwagą zwykle są zdrowsze i żyją dłużej od osób z tzw. "prawidłową wagą". Pojawiają się nawet głosy, że ustalony arbitralnie przez WHO próg nadwagi (25) jest zbyt niski.
        </h4><br></br><h3>Zakresy wartości BMI:</h3>

        <br></br><h4>mniej niż 16 - wygłodzenie(kolor niebieski)</h4>
        <h4>16 - 16.99 - wychudzenie(kolor niebieski)</h4>
        <h4>17 - 18.49 - niedowaga(kolor niebieski)</h4>
        <h4>18.5 - 24.99 - wartość prawidłowa(kolor zielony)</h4>
        <h4>25 - 29.99 - nadwaga(kolor żółty)</h4>
        <h4>30 - 34.99 - I stopień otyłości(kolor czerwony)</h4>
        <h4>35 - 39.99 - II stopień otyłości(kolor czerwony)</h4>
        <h4> powyżej 40 - otyłość skrajna(kolor czerwony)</h4>
        
      </Modal>
      <Modal isOpen={caloriesModalOpen} onRequestClose={closeCaloriesModal} style={difStyle}>
        <h3>
        Znajmość BMR (PPM) - podstawowej przemiany materii oraz TMR (CPM) - całkowitej przemiany materii jest konieczne, by odpowiednio kształtować swoją sylwetkę, niezależnie czy chcemy schudnąć, przybrać na masie czy utrzymać wagę, zapotrzebowanie kaloryczne i jego obliczenie są podstawowymi czynnikami, które nam pomogą w osiągnięciu celu. Wartość BMR określa liczbę kalorii, którą organizm przeznacza w ciągu doby na podstawowe funkcje życiowe, podczas odchudzania nie powinniśmy spożywać mniej kalorii niż wynosi nasze BMR, może to przynieść wiele niepożądanych skutków, takich jak: znaczne osłabienie, zwiększenie kortyzolu, ból czy zawroty głowy, długotrwałe spożywanie zbyt małej liczby kalorii może doprowadzić do poważnych chorób. Drugą stroną medalu jest spożywanie zbyt dużej liczby kalorii, źle obliczony wskaźnik CPM i przesadzenie ze spożywanym jedzeniem może powodować nadmierne otłuszczenie, w tym organów wewnętrznych, dlatego tak ważne jest obliczenie dokładnego zapotrzebowania kalorycznego.</h3>
        <br></br>
        <h3>Podana liczba kalorii jest wyliczona dla Ciebie z uwagi na cel jaki masz oraz tempo zmiany wagi. Badania wykazały, że niskie tempo zmiany wagi(0.5%-2%/mies) jest najlepsze dla naszego organizmu i maksymalizuje efekty jakie chcemy osiągnąć.</h3>
        
      </Modal>

      <Modal isOpen={bmrModalOpen} onRequestClose={closeBmrModal} style={difStyle}>
      <h3>
      Przez wiele lat to kalkulator BMI był z powodzeniem wykorzystywany do obliczania masy ciała, jednak z czasem na rynku pojawiło się zapotrzebowanie na narzędzia, które są o wiele dokładniejsze w swoich kalkulacjach. Jednym z nich jest właśnie kalkulator BMR (z ang. Basal Metabolic Rate), który prezentuje wskaźnik podstawowej przemiany materii i pozwala określić minimalną liczbę kalorii, która jest niezbędna do zachowania podstawowych funkcji organizmu.
          </h3>
      </Modal>
      <div className="health-tracker-container">
        <div className="health-tracker-circle" onClick={openWeightGoalModal}>
          <CircularProgressbar value={weight} maxValue={weightGoal} text={`${weight} kg`} />
          <div className="circle-label">Waga</div>
          <div className="circle-label">Cel: {weightGoal} kg</div>
        </div>
        <div className="health-tracker-circle" onClick={openBMIModal}>
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
        <div className="health-tracker-circle" onClick={openCaloriesModal}>
          <CircularProgressbar value={caloriesToConsume} maxValue={3000} text={`${caloriesToConsume} kcal`} styles={{

              text: { fontSize: '13px' },
            }} />
          <div className="circle-label">Kalorie</div>
        </div>
        <div className="health-tracker-circle" onClick={openBmrModal}>
          <CircularProgressbar value={bmr} maxValue={2500} text={`${bmr} kcal`} styles={{

text: { fontSize: '13px' },
}}/>
          <div className="circle-label">BMR</div>
        </div>
      </div>
    </div>
  );
}

export default HealthTracker;
