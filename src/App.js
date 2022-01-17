import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Todays from './components/pages/Todays';
import HotOutfits from './components/pages/HotOutfits';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/todays' element={<Todays/>}/>
        <Route exact path='/hot-outfits' element={<HotOutfits/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
