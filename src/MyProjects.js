import React, { useEffect } from 'react';
import './App.css';
import './MyProjects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faFolder } from '@fortawesome/free-solid-svg-icons';
import BrgyHubImage from './assets/img/Logo.png';
import ButtonGrid from './ButtonGrid';

const MyProjects = () => {
  const buttons = [
    {
      title: 'BrgyHub',
      image: BrgyHubImage, // Replace with your image URL
      description: 'ReactJS',
    },
    {
      title: 'Button 2',
      image: 'https://placekitten.com/150/151', // Replace with your image URL
      description: 'Description for Button 2',
    },
    // Add more buttons as needed
  ];

  return (
    <div className="ProjectContainer">
      <h1 className="ProjectTitle">My Projects</h1>
      <ButtonGrid buttons={buttons} />
    </div>
  );
};

export default MyProjects;
