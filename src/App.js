import React from 'react';
import './App.css';

function clickme(){
  alert('you clicked');
}

function App() {
  return (
    <div className="App">
      <button onClick={clickme}>
        
        button

      </button>
            
    </div>
  );
}

export default App;
