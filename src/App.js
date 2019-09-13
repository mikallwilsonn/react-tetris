// ----
// Dependencies
import React from 'react';
import './App.css';


// -----
// Child Components
import Tetris from './components/Tetris';


// ----
// App component
const App = () => {
  return (
    <div className="App">
      <Tetris />
    </div>
  );
}


// ----
// Export App Component
export default App;
