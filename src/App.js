import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Todays from './components/pages/Todays';
import HotOutfits from './components/pages/HotOutfits';
import OurAccesories from './components/pages/OurAccesories';
import Fragances from './components/pages/Fragances';
import MakeUp from './components/pages/MakeUp';
import Gifts from './components/pages/Gifts';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/todays' element={<Todays/>}/>
        <Route exact path='/hot-outfits' element={<HotOutfits/>}/>
        <Route exact path='/our-accesories' element={<OurAccesories/>}/>
        <Route exact path='/fragances' element={<Fragances/>}/>
        <Route exact path='/make-up' element={<MakeUp/>}/>
        <Route exact path='/gifts' element={<Gifts/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
