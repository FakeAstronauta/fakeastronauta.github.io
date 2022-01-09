import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Todays from './components/pages/Todays';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/todays' element={<Todays/>}/>
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
