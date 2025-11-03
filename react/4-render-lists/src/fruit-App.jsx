import { useState } from 'react'
import './App.css'

function FruitList() {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
  return (
    <ul>
    {fruits.map((fruit, index) => (
      <li key={`${fruit}-${index}`}>{fruit}</li>
    ))}
    </ul>
  );
}

function App() {
  return (
    <div className="fruit-list">
      <FruitList />
    </div>
  )
}
export default App
