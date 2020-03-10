import React from 'react';
import './App.css';
import Location from './components/Location';
import Navigation from './components/Navigation';
import { toolDescription } from './helper/ToolDescription';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <p className="toolDescription">{toolDescription}</p>
      <div className="App">
        <Location></Location>
      </div>
    </div>

  );
}

export default App;
