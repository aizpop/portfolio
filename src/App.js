import React, { useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faFolder } from '@fortawesome/free-solid-svg-icons';
import profileImage from './assets/img/Profile.png';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import MyProjects from './MyProjects';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutMe/>}/>
          <Route path="/projects" element={<MyProjects/>}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
