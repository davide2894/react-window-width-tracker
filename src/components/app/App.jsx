import './App.scss';
import WindowWidthTracker from '../windowWidthTracker/WindowWidthTracker';

function App() {
  return (
    <div className="app">
      <button className="app__button">
        Toggle WindowTracker
      </button>
      <WindowWidthTracker/>
    </div>
  );
}

export default App;
