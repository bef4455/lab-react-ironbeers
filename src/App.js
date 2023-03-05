import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'
import Beers from './pages/Beers.jsx';
import Onebeer from './pages/Onebeer.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Header />}>
          <Route path="/beers" element={<Beers />} />
          <Route path="/beers/:beerId" element={<Onebeer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
