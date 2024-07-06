import './App.css';
import { useState } from 'react';
import AllContext from './Context/AllContext';
import Parent from './Components/Parent';


function App() {
  const apiKey = process.env.REACT_APP_API_KEY
  const [home, sethome] = useState(true)

  return (
    <>
      <AllContext>
        <div className="name">
          © Code by Madhav Dua
        </div>
        <Parent />
      </AllContext>

    </>
  );
}

export default App;
