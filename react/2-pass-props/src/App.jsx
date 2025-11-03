import React from 'react';
import './App.css';

function DeveloperCard({ name, age, country }) {
  return (
  <div className="devolper-card">
    <h2>{name}</h2>
    <p>Age: {age}</p>
    <p>Country: {country}</p>
  </div>
  );
}
function App() {
  const developerObj = {
    name: "Alice",
    age: 30,
    country: "USA"
  };

  return (
    <div className="App">
      <DeveloperCard {...developerObj} />
    </div>
  );
}
export default App
