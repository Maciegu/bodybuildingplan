import { useState,useEffect  } from 'react';
import Header from '../../Home/Header/Header.js';
import { objektque } from './questions.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './RegForm.css';
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



// function RegForm(props){
//     const [gender, setGender] = useState('');
//     const [age, setAge] = useState('');
//     const [weight, setWeight] = useState('');
//     const [height, setHeight] = useState('');
//     const [objective, setObjective] = useState('');
//     const [advanced, setAdvanced] = useState('');
//     const [days, setDays] = useState('');
//     const [hours, setHours] = useState('');
//     const [activity, setActivity] = useState('');
//     const [priority, setPriority] = useState('');

//     const handleChangeGender = (e) => setGender(e.target.value);
//     const handleChangeAge = (e) => setAge(e.target.value);
//     const handleChangeWeight = (e) => setWeight(e.target.value);
//     const handleChangeHeight = (e) => setHeight(e.target.value);
//     const handleChangeObjective = (e) => setObjective(e.target.value);
//     const handleChangeAdvanced = (e) => setAdvanced(e.target.value);
//     const handleChangeDays = (e) => setDays(e.target.value);
//     const handleChangeHours = (e) => setHours(e.target.value);
//     const handleChangeActivity = (e) => setActivity(e.target.value);
//     const handleChangePriority = (e) => setPriority(e.target.value);


//     const [answers, setPytania] = useState({});

//     const zmienne = ['gender','objective','advanced','days','hours','activity','priority'];
//     const zm_numerowane = ['age','weight','height'];
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert(`Registration done.`);
//       };
 

//     const [curr_question, setQuestion] = useState('Jaka jest twoja płeć?');
//     const [curr_answear, setAnswers] = useState(['kobieta','mezczyzna']);
//     const [counter,setCounter] = useState(0);

    

//     const addPersonalData = () => {
//         const personal_data = {
//             gender: gender,
//             age: age,
//             weight: weight,
//             height: height,
//             objective: objective,
//             advanced: advanced,
//             days: days,
//             hours: hours,
//             activity: activity,
//             priority: priority
//         };
//         props.onAdd(personal_data);
    
//       }

      
//     function showAnswears() {
//         const new_answears = curr_answear.map((item, index) => (
//           <div key={index} className='item-input-ans'>
//             {item === 'number'
//                 ?
//                 (
//                 <input
//                     type="number"
//                     name={zm_numerowane[counter]}
//                     id={`answer${index}`}
//                     value={zm_numerowane[counter]}
//                     onChange={(e) => handleAnswerChange(e.target.value)}
//                   />
//                 )
//                 : 
//                 (
//                 <>
//                     <input
//                         type="radio"
//                         name={zm_numerowane[counter]}
//                         id={`answer${index}`}
//                         value={zm_numerowane[counter]}
//                         onChange={(e) => handleAnswerChange(e.target.value)}
//                   />
//                     <label htmlFor={`answer${index}`}>{item}</label>
//                 </>
//                 )
                
//             }
                
//           </div>
//         ));
//         return new_answears;
//       }

//       const handleAnswerChange = (value) => {
//         setPytania((prevAnswers) => ({ ...prevAnswers, [curr_question]: value }));
//       };

//     function showQuestions(){
//         if(counter === questions_length){
//             alert('registration done');  
//         }
//         else{
//             let current_question = objektque[counter].question;
//             let current_answers = objektque[counter].answers;
//             setAnswers(Array.isArray(current_answers) ? current_answers : [current_answers]);
//             setQuestion(current_question);
//             setCounter(counter+1);
//         }
        
//     }

//     return(
//         <div>
//             <Header loginUser={(user) => this.loginUser(user)} addUser={(user) => this.addUser(user)}/>
//             <div className="main-form">
//                 <div className="main-container-form">
//                     <div className="cont-toogle-btn">
//                         {curr_question}
//                     </div>
//                     <div className="cont-answers">
//                         <form onSubmit={handleSubmit}>
//                             <div className="inputs-ans">
//                                 {showAnswears()}
//                             </div>
//                         </form>
//                     </div>
//                     <div className="cont-final-btn">
//                         {counter === 10 ? <input type="submit" id="btn-log" value="Submit" onClick={() => addPersonalData()} /> :  <button onClick={showQuestions}>Dalej</button>}
//                     </div>
//                 </div>
//             </div>
//         </div>
        
//     )
// }

// export default RegForm;

function RegForm(props) {
  const [answers, setAnswers] = useState({
    weight: '',
    height: '',
    age: '',
    gender: '',
    objective: '',
    level: '',
    days: '',
    time: '',
    activity: '',
    priority: '',
  });
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  
    const handleAnswerChange = (value) => {
      setAnswers((prevAnswers) => ({ ...prevAnswers, [objektque[currentQuestionIndex].question]: value }));
    };
  
    const addPersonalData = () => {
      // Sprawdź, które pola są wypełnione
      const filledFields = Object.keys(answers).filter((field) => answers[field] !== '');
    
      // Sprawdź, czy wszystkie wymagane pola są wypełnione
      const requiredFields = ['weight', 'height', 'age', 'gender', 'objective', 'level', 'days', 'time', 'activity', 'priority'];
      const missingFields = requiredFields.filter((field) => !filledFields.includes(field));
    
      if (missingFields.length === 0) {
        // Wszystkie wymagane pola są wypełnione, więc dodaj dane personalne
        props.addPersonalData(answers);
      } else {
        // Brakujące wymagane pola, obsłuż błąd
        console.error(`Missing required fields: ${missingFields.join(', ')}`);
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Registration done.');
    };
  
    // const addPersonalData = () => {
    //   for(let i=0;i<answers.length;i++){
    //     console.log('Answers:', answers);
    //   }
    //   const personal_data = {
    //     weight: answers[0],
    //     height: answers[1],
    //     age: answers[2],
    //     gender: answers[3],
    //     objective: answers[4],
    //     advanced: answers[5],
    //     days: answers[6],
    //     hours: answers[7],
    //     activity: answers[8],
    //     priority: answers[9],
    //   };
    //   props.addPersonalData(personal_data);
    // };
  
    const showQuestions = () => {
      if (currentQuestionIndex < objektque.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        alert('Registration done');
      }
    };
  
    const renderAnswerInputs = () => {
      const currentQuestion = objektque[currentQuestionIndex];
      if (currentQuestion.answers === 'number') {
        return (
          <input
            type="number"
            name={currentQuestion.question}
            id={`answer${currentQuestionIndex}`}
            value={answers[currentQuestion.question] || ''}
            onChange={(e) => handleAnswerChange(e.target.value)}

          />
        );
      } else {
        return currentQuestion.answers.map((answer, index) => (
          <div key={index} className='item-input-ans'>
            <input
              type="radio"
              name={currentQuestion.question}
              id={`answer${index}`}
              value={answer}
              onChange={() => handleAnswerChange(answer)}
              checked={answers[currentQuestion.question] === answer}

            />
            <label htmlFor={`answer${index}`}>{answer}</label>
          </div>
        ));
      }
    };
  
    return (
      <div>
        <Header loginUser={(user) => this.loginUser(user)} addUser={(user) => this.addUser(user)} />
        <div className="main-form">
          <div className="main-container-form">
            <div className="cont-toogle-btn">{objektque[currentQuestionIndex].question}</div>
            <div className="cont-answers">
              <form onSubmit={handleSubmit}>
                <div className="inputs-ans">{renderAnswerInputs()}</div>
              </form>
            </div>
            <div className="cont-final-btn">
                {currentQuestionIndex === 9 ? <input type="submit" id="btn-log" value="Submit" onClick={() => addPersonalData()} /> :  <button onClick={showQuestions}>Dalej</button>}
            </div>
            
          </div>
        </div>
      </div>
    );
  }
  
  export default RegForm;