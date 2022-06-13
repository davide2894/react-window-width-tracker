import './App.scss';
import { useState } from 'react';
import WindowWidthTracker from '../windowWidthTracker/WindowWidthTracker';

/**
 * Challenge:
 * 1. Create state called `show`, default to `true`
 * 2. When the button is clicked, toggle `show`
 * 3. Only display `<WindowTracker>` if `show` is `true`
 */

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
