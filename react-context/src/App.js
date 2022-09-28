import { useState } from 'react';
import React from 'react';
import Dashboard from './Component/Dashboard/Dashboard.component';

function App() {
  const [title, setTitle] = React.useState('Home');
  const [username, setUsername] = React.useState('John Doe');
  const [activeProfileId, setActiveProfileId] = React.useState('A1B2C3');

  return (
    <div className="app">
      <h4>Welcome, {username}</h4>
      <Dashboard {...{ activeProfileId, title, username }} />
    </div>
  );
}

export default App;
