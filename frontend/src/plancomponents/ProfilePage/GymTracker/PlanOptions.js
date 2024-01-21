// PlanOptions.js
import React from 'react';
import './PlanOptions.css';

const PlanOptions = ({ selectedPlan, onSelectPlan, days }) => {
  const handleChange = (event) => {
    onSelectPlan(event.target.value);
  };

  // Generuj opcje planów na podstawie liczby dni
  const planOptions = Array.from({ length: days }, (_, index) => {
    const planLetter = String.fromCharCode(65 + index);
    return (
      <option key={planLetter} value={planLetter}>
        Plan {planLetter}
      </option>
    );
  });

  return (
    <div className="plan-options-container">
      <select value={selectedPlan} onChange={handleChange}>
        <option value="default">Wybierz plan...</option>
        {planOptions}
      </select>
    </div>
  );
};

export default PlanOptions;
