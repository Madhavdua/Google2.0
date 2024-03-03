import './App.css';
import Parent from './Components/Parent';

import { useState } from 'react';


import AllContext from './Context/AllContext';

function App() {

  const apiKey = process.env.REACT_APP_API_KEY
  const [home, sethome] = useState(true)

  return (
    <>
      <AllContext>
        <Parent/>
      </AllContext>

    </>
  );
}

export default App;
