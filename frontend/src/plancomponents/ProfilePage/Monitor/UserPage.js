import './UserPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import HeaderNav from '../Header/HeaderNav.js';
import GymTracker from '../GymTracker/GymTracker.js';
import HealthTracker from '../HealthTracker/HealthTracker.js';
import PlanPage from '../PlanPage/PlanPage.js';
import Results from '../ResultsPage/ResultsPage.js';
import Settings from '../Settings/SettingsPage.js';
import Tutorials from '../TutorialPage/TutorialPage.js';
import FormProfile from '../FormRegister/FormProfile.js';
import React, { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const tilesData = [
    {
      name: 'Plan Page',
      title: 'PUSH PULL UPPER LOWER',
      desc: 'TAK TRZYMAJ! W TYM MIESIĄCU LICZBA TWOICH TRENINGÓW WYNOSI: ',
      icon: '🏋️‍♂️',
      count: 15,
      total: 20,
    },
    {
        name: 'Gym Tracker',
      title: 'Gym Tracker',
      desc: 'TWOJ PROGRES W WYCISKANIU LEŻĄC WYNOSI: ',
      icon: '📊',
      count: 120,
      total: 100,
    },
    {
        name: 'Results',
        title: 'Wyniki',
        desc: 'Najlepsze wyniki z zeszłego tygodnia:',
        icon: '🏆',
        
        count: 8,
        total: 20,
      },
    {
        name: 'Health Tracker',
      title: 'Health Tracker',
      desc: 'Dzienna liczba kalorii: ',
      icon: '❤️',
      count: 2500,
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
  
  function calculateProgressPercentage(count, total) {
    return (count / total) * 100;
  }

function UserPage({ onLogout }){

    const [selectedComponent, setSelectedComponent] = useState(null);
    const [renderUserPageContent, setRenderUserPageContent] = useState(true);
  
    const handleNavSelection = (componentName) => {
      switch (componentName) {
        case 'profile':
            setSelectedComponent(null);
            setRenderUserPageContent(true);
          break;
        case 'your plan':
          setSelectedComponent(<PlanPage />);
          setRenderUserPageContent(false);
          break;
        case 'gym tracker':
          setSelectedComponent(<GymTracker />);
          setRenderUserPageContent(false);
          break;
        case 'health tracker':
          setSelectedComponent(<HealthTracker />);
          setRenderUserPageContent(false);
          break;
        case 'tutorial':
          setSelectedComponent(<Tutorials />);
          setRenderUserPageContent(false);
          break;
        case 'results':
          setSelectedComponent(<Results />);
          setRenderUserPageContent(false);
          break;
        case 'settings':
          setSelectedComponent(<Settings />);
          setRenderUserPageContent(false);
          break;
        default:
          setSelectedComponent(null);
          setRenderUserPageContent(false);
          break;
      }
    };
  
    const handleTileClick = (title) => {
        // Tu możesz obsłużyć kliknięcie w kafelek, na przykład przekierować użytkownika do odpowiedniego komponentu
        console.log(`Kliknięto kafelek: ${title}`);
      };
      return (
        <div>
          <HeaderNav onLogout={onLogout} onNavSelection={handleNavSelection} />
          {renderUserPageContent && (
            <div className="cont-menu">
              <div className="profile-cont">
                <div className="profile-avatar">
                  <div className="avatar"></div>
                  <h1>Witaj MACIEK!</h1>
                </div>
                <div className="tiles-container">
                {tilesData.map((tile) => (
                    <div key={tile.title} className="tile" onClick={() => handleTileClick(tile.title)}>
                        <div className="tile-icon">{tile.icon}</div>
                        <div className="tile-content">
                        <div className="tile-title">{tile.title}</div>
                        <div className="tile-count">{tile.desc}
                        {tile.name === 'Plan Page' ? (
                                <div className="progress-circle">
                                <CircularProgressbar
                                    value={(tile.count / tile.total) * 100}
                                    text={`${tile.count}/${tile.total}`}
                                />
                                </div>
                            ) : tile.name === 'Tutorial' ? (
                                // Tutaj możesz dodać zdjęcie dla 'Tutorial'
                                <div className="tutorial-tile">
                                    <div className="tutorial-search">
                                        {/* Komponent wyszukiwarki ćwiczeń */}
                                        {/* Poniżej to tylko przykład, dostosuj do swoich potrzeb */}
                                        <input type="text" placeholder="Wyszukaj ćwiczenie" />
                                        <button>Szukaj</button>
                                    </div>
                                    <div className="tutorial-player">
                                        {/* Komponent odtwarzacza filmików */}
                                        {/* Poniżej to tylko przykład, dostosuj do swoich potrzeb */}
                                        <iframe
                                        width="80%"
                                        height="215"
                                        src="https://www.youtube.com/embed/VIDEO_ID"
                                        title="YouTube video player"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                        ></iframe>
                                    </div>
                                    </div>
                            ) : tile.name === 'Gym Tracker' ? (
                                <div className="progress-circle">
                                    <CircularProgressbar
                                        value={(tile.count / tile.total) * 100}
                                        text={`${tile.count}%`}
                                    />
                                </div>
                                
                                ) : tile.name === 'Results' ? (
                                        <div className='results-tile'>
                                            <div>Wyciskanie sztangi leżąc: 100kg</div>
                                            <div>Przysiad klasyczny ze sztangą: 150kg</div>
                                            <div>OHP: 50kg</div>
                                        </div>
                                        ) : tile.name === 'Health Tracker' ? (
                                            <div className='health-tile'>
                                                {tile.count}
                                            </div>
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

          )}

          {selectedComponent}
        </div>
      );
}

export default UserPage;