import React from 'react';
import './App.css';
import clickme from './components/Quizcomponent1';
import Records from './quiz.json'

function App(){
  return (
    <div className="App">
      <button onClick={clickme}>
        
        button

      </button>
            
    </div>
  );
}
  

export default App;
