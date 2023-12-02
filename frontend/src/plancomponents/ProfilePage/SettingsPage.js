import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import HeaderNav from './HeaderNav.js';

const personal_data = ['imie','data urodzenia','nazwisko','plec'];
const training_data = ['cel','stopień zaawansowania','plan','ilość dni na planie', 'czas na trening', 'aktywność pozatreningowa','priorytet'];
const health_data = ['waga','bmi','bmr','liczba kalorii'];
const secured_data = ['email','data urodzenia','password'];

const listPersonalData = personal_data.map((item) => <div class="task-info">{item}: <span>Maciej</span></div> );
const listTrainingData = training_data.map((item) => <div class="task-info">{item}: <span>Redukcja</span></div> );
const listHealthData = health_data.map((item) => <div class="task-info">{item}: <span>Norma</span></div> );
const listSecuredData = secured_data.map((item) => <div class="task-info">{item}: <span>*****</span></div> );

function Settings(){
    return(
        <div>
            <HeaderNav />
            <div class="cont-menu">
                <div class="profile-cont">
                    <div class="profile-avatar">
                        <div class="avatar"></div>
                        <h1>Ustawienia</h1>
                    </div>
                    <div class="task-menu">

                        <div class="task-item">Dane osobowe
                            <div class="task-line"></div>{listPersonalData}   
                        </div>

                        <div class="task-item">Dane treningowe
                            <div class="task-line"></div>{listTrainingData}
                        </div>

                        <div class="task-item">Dane zdrowotne
                            <div class="task-line"></div>{listHealthData}
                        </div>

                        <div class="task-item">Prywatność
                        <   div class="task-line"></div>{listSecuredData}
                        </div>

                    </div>              
                </div>         
            </div>
        </div>
    )
}

export default Settings;