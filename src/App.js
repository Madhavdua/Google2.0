import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Searchbar from './Components/Searchbar';
import Navbar from './Components/Navbar';
import All from './Components/All';
import { useState } from 'react';

import LoadingBar from 'react-top-loading-bar';

function App() {
  const [home, sethome] = useState(true)
  const [query, setquery] = useState("")
  const [progress, setProgress] = useState(100)
  const page = (a, q) => {
    if (a == true) sethome(true)
    else {
      sethome(false);
      setquery(q);
    }
  }
  return (
    <>
      <LoadingBar
        // height={3}
        color='#f11946'
        progress={progress}
      />
      {home && <Home page={page} query={query} />}
      {!home && <Navbar setquery={setquery} query={query} setProgress={setProgress} />}

    </>
  );
}

export default App;
