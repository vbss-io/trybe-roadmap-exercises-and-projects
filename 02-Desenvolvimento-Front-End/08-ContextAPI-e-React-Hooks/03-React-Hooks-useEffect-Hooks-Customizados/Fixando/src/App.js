import { useState } from 'react';
import RandomNumber from './components/RandomNumber';
import './App.css';

function App() {
  const [isMounted, setIsMounted] = useState(true);
  
  return (
    <div className="App">
      <button onClick={() => setIsMounted(!isMounted)}>
        { isMounted ? 'Stop' : 'Start' }
      </button>
      {isMounted && <RandomNumber isMounted={ isMounted }/>}
    </div>
    );
}

export default App;
