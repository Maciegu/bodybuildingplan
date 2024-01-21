import React from 'react';
import './ResultsPage.css';

const ResultsTable = ({ plan }) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>ĆWICZENIE</th>
            <th>CIĘŻAR</th>
            <th>SERIA 1</th>
            <th>SERIA 2</th>
            <th>SERIA 3</th>
          </tr>
        </thead>
        <tbody>
          {plan.map((exercise, index) => (
            <tr key={index}>
              <td>{exercise.name}</td>
              <td>{exercise.weight} kg</td>
              <td>{exercise.set1}</td>
              <td>{exercise.set2}</td>
              <td>{exercise.set3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
