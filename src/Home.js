import React, { useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faFolder } from '@fortawesome/free-solid-svg-icons';
import profileImage from './assets/img/Profile.png';

function Home() {
  return (
    <div className="App">
      <div className="ProfileContainer">
        <img src={profileImage} alt="Profile" className="ProfileImage" />
      </div>
      <div className="TextContainer">
        <p>Airah Baculo</p>
        <span>UX Designer</span>
      </div>
      <video autoPlay muted loop className="BackgroundVideo">
        <source src={require('./assets/mp4/Background.mp4')} type="video/mp4" />
      </video>
    </div>
  );
}

export default Home;
