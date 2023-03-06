import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'
import Beers from './pages/Beers.jsx';
import Onebeer from './pages/Onebeer.jsx';
import RandomBeer from './pages/RandomBeer.jsx'
import NewBeer from './pages/NewBeer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Header />}>
          <Route path="/beers" element={<Beers />} />
          <Route path="/beers/:beerId" element={<Onebeer />} />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/new-beer" element={<NewBeer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
