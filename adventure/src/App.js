import React from 'react';
import './App.css';
import Location from './components/Location';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <div className="App">
        <Location></Location>
      </div>
    </div>

  );
}

export default App;
