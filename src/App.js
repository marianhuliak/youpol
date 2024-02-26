import { Route, Routes } from 'react-router-dom';
import './App.css';
import YouPolShorts from './components/YouPolShorts/YouPolShorts.js';
import Subscriptions from './components/Subscriptions/Subscriptoins.js';
import YouPolMusic from './components/YouPolMusic/YouPolMusic.js';
import Home from './components/Home.js';

function App() {
  return (
    <div>
      <Routes>
       <Route path="/" element={<Home />}/> 
       <Route path="/youpol_shorts" element={<YouPolShorts />}/>
       <Route path="/subscriptions" element={<Subscriptions />}/>
       <Route path="/youyol_music" element={<YouPolMusic/>}/>
      </Routes>
    </div>
  );
}

export default App;
