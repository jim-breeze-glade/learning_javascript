import { useState } from 'react'
import './App.css'

function UserList() {
  const users = [
    {id: "user-001-employee", name: "Alice", email: "alice@email.com"},
    {id: "user-002-employee", name: "Bob", email: "bob@email.com"},
    {id: "user-003-employee", name: "Joe", email: "joe@email.com"}
  ];
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="user-list">
      <UserList />
    </div>
  )
}
export default App
