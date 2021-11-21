import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <NavBar/>
      {/* <Routes>
        <Route/>
      </Routes> */}
    </Router>
  );
}

export default App;
