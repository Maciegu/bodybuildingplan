import './PlanPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { exercises_plan } from './exercises.js';


const listPlan = exercises_plan.map((item) => {
    return(
        <div class="rzad-danych">
            <div className='nazwa-cwiczenia'><span>{item.name}</span></div>
            <div><span>{item.sets}</span></div>
            <div><span>{item.reps} </span></div>
            <div><span>{item.rpe}</span></div>
            <div>
                <button class="exercise-change-btn">Zmień</button>
            </div>
        </div>
    );
});

const plan_headings = (
        <div class="rzad-danych" id="first-rzad">
            <div><span>CWICZENIE</span></div>
            <div><span>ILOSC SERII</span></div>
            <div><span>POWTÓRZENIA</span></div>
            <div><span>RPE</span></div>
            <div><span>ZMIANA</span></div>
        </div>
);

const plan_name = 'PUSH PULL UPPER LOWER';

function PlanPage(){
    return(
        <div>
            <div class="cont-menu">
                <div class="profile-cont">
                    <div class="profile-avatar">
                        <div class="avatar"></div>
                        <h1>{plan_name}</h1>
                    </div>
                    <div class="plan-cont">
                        <h2>day 1</h2>{plan_headings}{listPlan}
                        <h2>day 2</h2>{plan_headings}{listPlan}
                        <h2>day 3</h2>{plan_headings}{listPlan}
                        <h2>day 4</h2>{plan_headings}{listPlan} 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanPage;