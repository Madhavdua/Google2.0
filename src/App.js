import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './Components/Search';
import All from './Components/All';
import Video from './Components/Video';
import Image from './Components/Image';
import NotFound from './Components/NotFound';


function App() {
  const apiKey = process.env.REACT_APP_API_KEY

  return (
    <>

      <BrowserRouter>
        <div className="name">
          © Code by Madhav Dua
        </div>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path="*" element={<NotFound />} />
          <Route exact path='/search' element={<Search />}>
            <Route exact path='all' element={<All />} ></Route>
            <Route exact path='image' element={<Image />} ></Route>
            <Route exact path='video' element={<Video />} ></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
