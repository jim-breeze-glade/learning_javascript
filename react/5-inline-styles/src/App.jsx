import { useState } from 'react'
import './App.css'

function Button({ buttonText }) {
  const defaultStyles = {
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease"
  };
  return <button style={defaultStyles}>{"jim"}</button>;
}

function App() {
  return <Button />
}

export default App
