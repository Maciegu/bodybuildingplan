import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import HeaderNav from './HeaderNav.js';
import { exercises_plan } from './exercises.js';

const listExercices = exercises_plan.map((item) => {
    return(
        <div class="exercise-item">
            <div class="ex-photo"></div>
            <h2 class="ex-name">{item.name}</h2>
        </div>
    );
});


function Tutorials(){
    return(
        <div>
            <HeaderNav />
            <div class="cont-menu">
                <div class="profile-cont">
                    <div class="profile-avatar">
                        <div class="avatar"></div>
                        <h1>Wyszukiwarka cwiczen</h1>
                    </div>     
                </div>
                
                <div class="search-bar-cont">
                    <input type="text" placeholder="Wpisz cwiczenie z planu jakie chcesz znalezc..." />
                    <div class="tutorials-cont">
                        {listExercices}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tutorials;