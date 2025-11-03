import { useState } from 'react'
import './App.css'

function Greeting({ isLoggedIn }) {
  return <h1>{isLoggedIn ? "Welcome back!" : "Please sign in"}</h1>;
}

function App() {
  return (
    <div ClassName="App">
      <Greeting isLoggedIn={false} />
    </div>
  );
}
export default App
