import React from 'react';
import CalculatorFrame from './CalculatorFrame.js';
import './index.css';

class App extends React.Component {
  render(){
    return (
      <div className="appContainer">
        <CalculatorFrame/>
      </div>
    );
  }
}

export default App;
