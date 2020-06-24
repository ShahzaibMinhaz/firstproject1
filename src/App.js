import React from 'react';
import './App.css';
import Dinner from './Dinner.js'

function App(props) {
  return (
    <div className="App">
      <Dinner Name="Biryani" SwName="Kheer"/>
      <hr/>
      <Dinner Name="Biryani" SwName="Kheer"/>
      <hr/>
      <Dinner Name="Biryani" SwName="Kheer"/>
    </div>
  );
}

export default App;
