import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faDumbbell, faUserDoctor, faListCheck, faUser, faDisplay, faChartLine, faDiceSix, faHeartPulse } from '@fortawesome/free-solid-svg-icons'
import { faNutritionix, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import Register from './ProfilePage/Register.js';
import { Route, Routes } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { useState,useEffect  } from 'react';
import React, { useRef } from 'react';



function NavSekcja({onButtonClick}){
    
      return(
            <section className="page-1">
                <div className="inside-main">
                    <h1>BODYBUILDING PLAN BUILDER</h1>
                    <h3>Create a bodybuilding plan in a few quick steps and have a fun!</h3>
                    <button type="button" onClick={onButtonClick}>LET'S GET STARTED</button>
                </div>
            </section>
      );
};

const headingDescr = [
    { opis: 'To narzędzie do tworzenia treningów umożliwia zbudowanie planu treningu dostosowanego do Twoich (lub Twoich klientów*) celów, preferencji, harmonogramu i dostępnego sprzętu. Po prostu wypełnij ankiete. Niezależnie od tego, czy jesteś początkujący, czy zaawansowany, chcesz budować mięśnie lub spalić tłuszcz, kreator treningów dopasuje Ci odpowiedni plan.',
    ikonka: faDumbbell},
    {opis:'Wyselekcjonowane ćwiczenia są wybrane na podstawie badań, w których badano skuteczność ćwiczeń na grupie początkujacych oraz średniozaawansowanych. Tworzone połączenia między ćwiczeniami oraz plany są budowane na podstawie wiedzy specjalistów, trenerów oraz książek. Algorytm generuje najlepszy zestaw ćwiczeń dla ciebie, a gdy jakieś ćwiczenie tobie nie odpowiada, możesz je wymienić na inne. Cały spersonalizowany plan treningowy będzie widnieć cały czas w zakładce na twoim profilu.',
    ikonka:faUserDoctor}
];

const listDescr = headingDescr.map((item) => 
    <div className="p2-icon-cont">
        <div className="icons-box" id="first-box">
            <FontAwesomeIcon icon={item.ikonka} className='header-icon'/>
            <h2>{item.opis}</h2>
        </div>
    </div>
);

function Section2(){
    return(
        <section className="page-2">
            <div className="inside-main">
                <h1>How it works?</h1>
                {listDescr}
            </div>
      </section>
    );
};

const iconItems1 = [
    {opis: 'Algorytm tworzy plan treningowy w oparciu o twoje cele, preferencje, stopień zaawansowania, aktywność oraz właściwości ciała',
    ikonka: faDumbbell},
    {opis:'Wpisuj swoje wyniki danego treningu w specjalnym miejscu w planie',
    ikonka:faListCheck},
    { opis: 'Zaloguj się na swój profil, a wszystko będziesz mieć pod ręką!',
    ikonka: faUser}
];

const iconItems2 = [
    {opis: 'Na ekranie pulpitu możesz przeglądać swoje ustawienia, wyniki, plan treningowy i wiele więcej',
    ikonka: faDisplay},
    {opis:'Kliknij na ćwiczenie, a zobaczysz filmik, jak prawidłowo je wykonać',
    ikonka:faYoutube},
    { opis: 'Sprawdź jakie suplementy warto brać oraz jak prawidłowo się odżywiać',
    ikonka: faNutritionix}
];

const iconItems3 = [
    {opis: 'Śledź swoje wyniki w kalendarzu, sprawdzając swój postęp',
    ikonka: faChartLine},
    {opis:'Modyfikuj swój plan treningowy, zmieniając ćwiczenia, których nie chcesz',
    ikonka:faDiceSix},
    { opis: 'Sprawdź swoje BMI, wartości kaloryczne w zależnosci od celu oraz wiele innych',
    ikonka: faHeartPulse}
];

const listIcons1 = iconItems1.map((item) => <div className="icon-prop"><FontAwesomeIcon icon={item.ikonka} className='header-icon'/><div>{item.opis}</div></div>);
const listIcons2 = iconItems2.map((item) => <div className="icon-prop"><FontAwesomeIcon icon={item.ikonka} className='header-icon'/><div>{item.opis}</div></div>);
const listIcons3 = iconItems3.map((item) => <div className="icon-prop"><FontAwesomeIcon icon={item.ikonka} className='header-icon'/><div>{item.opis}</div></div>);
     

function Section3(){
    return(
        <section className="page-3">
            <div className="inside-main">
                <h1>features</h1>
                <div className="icon-container">{listIcons1}</div>
                <div className="icon-container">{listIcons2}</div>
                <div className="icon-container">{listIcons3}</div>
            </div>
        </section>
    );
};

function Main({onButtonClick}){
    const [redirectToProfile, setRedirectToProfile] = useState(false);
  
    useEffect(() => {
      // Jeśli chcesz obsługiwać przewinięcie przy załadowaniu strony,
      // można użyć window.scrollTo(0, section2Ref.current.offsetTop);
    }, []);
  
    const handleClick = () => {
      setRedirectToProfile(true);
      onButtonClick();
    };

    return(
        <div className="main-default-page">
            {redirectToProfile && (
                <Routes>
                    <Route path="/ProfilePage/Register.js" element={<Register />} />
                </Routes>
             )}
            {redirectToProfile ? null : <NavSekcja onButtonClick={handleClick} />}
            {redirectToProfile ? null : <Section2 />}
            {redirectToProfile ? null : <Section3 />}
            {redirectToProfile && <Navigate to="/ProfilePage/Register.js" />}
                
        </div>
    )
}

export default Main;