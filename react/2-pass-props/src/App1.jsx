import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <Greeting name="Toe" />
      <Greeting name="Joe" />
      <Greeting name="Jim" /> 
      <DeveloperCard name="Tim" />
      <DeveloperCard age="100" />
      <DeveloperCard country="USA" />
    </>
  );
}

export default App
function Greeting(props) {
  console.log(props);
  return <h1>Hi {props.name}!</h1>;
}

function DeveloperCard({ name, age, country }) {
  return (
    <div className="developer-card">
      <h1>Developer: {name}</h1>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
    </div>
  )
}
