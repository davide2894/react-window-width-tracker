import './App.scss';
import { useState } from 'react';
import WindowWidthTracker from '../windowWidthTracker/WindowWidthTracker';

function App() {
  const [show, setShow] = useState(false);
  
  function handleClick(){
    setShow(prevState => !prevState);
  }

  return (
    <div className="app">
      <button 
        className="app__button"
        onClick={handleClick}
      >
        Toggle WindowTracker
      </button>
      { show && <WindowWidthTracker/>}
    </div>
  );
}

export default App;
