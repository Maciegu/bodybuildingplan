import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import HeaderNav from './HeaderNav.js';

function GymTracker(){
    return(
        <div>
            <HeaderNav />
            <div class="cont-menu">
                <div class="profile-cont">
                    <div class="profile-avatar">
                        <div class="avatar"></div>
                        <h1>Witaj Maciegu!</h1>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default GymTracker;