import './RegForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import HeaderNav from './HeaderNav.js';
import { objektque } from './questions.js';
import { useState,useEffect  } from 'react';

const newquestions = objektque.map((item) => {
    return {
        question: item.question,
    }
})

const newanswears = objektque.map((item) => {
    return {
        answear: item.answers,
    }
})

const questions_length = newquestions.length;

function RegForm(){
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [objective, setObjective] = useState('');
    const [advanced, setAdvanced] = useState('');
    const [days, setDays] = useState('');
    const [hours, setHours] = useState('');
    const [activity, setActivity] = useState('');
    const [priority, setPriority] = useState('');

 

    const [curr_question, setQuestion] = useState('Jaka jest twoja płeć?');
    const [curr_answear, setAnswers] = useState(['kobieta','mezczyzna']);
    const [counter,setCounter] = useState(0);



      
    function showAnswears() {
        const new_answears = curr_answear.map((item, index) => (
          <div key={index} className='item-input-ans'>
            {item === 'number'
                ?
                (
                <input type="number" name="answer" id={`answer${index}`} />
                )
                : 
                (
                <>
                    <input type="radio" name="answer" id={`answer${index}`} />
                    <label htmlFor={`answer${index}`}>{item}</label>
                </>
                )
                
            }
                
          </div>
        ));
        return new_answears;
      }

    function showQuestions(){
        if(counter === questions_length){
            alert('registration done');  
        }
        else{
            let current_question = objektque[counter].question;
            let current_answers = objektque[counter].answers;
            setAnswers(Array.isArray(current_answers) ? current_answers : [current_answers]);
            setQuestion(current_question);
            setCounter(counter+1);
        }
        
    }

    return(
        <div>
            <HeaderNav />
            <div className="main-form">
                <div className="main-container-form">
                    <div className="cont-toogle-btn">
                        {curr_question}
                    </div>
                    <div className="cont-answers">
                        <form>
                            <div className="inputs-ans">
                                {showAnswears()}
                            </div>
                        </form>
                    </div>
                    <div className="cont-final-btn">
                        <button onClick={showQuestions}>Dalej</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default RegForm;