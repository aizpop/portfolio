import React, { useEffect } from 'react';
import './App.css';
import './AboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faFolder } from '@fortawesome/free-solid-svg-icons';
import profileImage from './assets/img/Profile.png';

function AboutMe() {
  return (
    <div className="container">
        <div className="top">
            <video autoPlay muted loop className="Animation">
                <source src={require('./assets/mp4/WhiteCircleAnimation.mp4')} type="video/mp4" />
            </video>
            <img src={profileImage} alt="Profile" className="ProfileContainerAbout"/>
            <p>Airah Baculo</p>
        </div>
        <div className="bodyContainer">
            <div className="leftSide">
                <table className="tableOne">
                    <thead>
                        <tr>
                        <th colSpan="2">Personal Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td><FontAwesomeIcon icon={faUser} /> Phone Number:</td>
                        <td>09603258031</td>
                        </tr>
                        <tr>
                        <td><FontAwesomeIcon icon={faHouse} /> Email Address:</td>
                        <td>aizbaculo@gmail.com</td>
                        </tr>
                        <tr>
                        <td><FontAwesomeIcon icon={faHouse} /> Address:</td>
                        <td>395B. Balagtas St., Pahina Central Cebu City</td>
                        </tr>
                        <tr>
                        <td><FontAwesomeIcon icon={faFolder} /> Date of Birth:</td>
                        <td>October 5, 2001</td>
                        </tr>
                        {/* Add more rows for additional personal details */}
                    </tbody>
                </table>
                <table className="tableOne">
                    <thead>
                        <tr>
                        <th colSpan="2">Experience</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td><FontAwesomeIcon icon={faUser} /> Competition:</td>
                        <td>Pitching Competition 2023 - ICT Congress</td>
                        </tr>
                        <tr>
                        <td><FontAwesomeIcon icon={faHouse} /> Seminar / Training:</td>
                        <td>Seminar / Training on Modern Web Development using ReactJS and NodeJS</td>
                        </tr>
                        <tr>
                        <td><FontAwesomeIcon icon={faHouse} /> Developed:</td>
                        <td>Barangay Emergency and Disaster Management System as Frontend and Backend Developer</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="rightSide">
                <table className="tableOne">
                    <thead>
                        <tr>
                        <th colSpan="2">Educational Background</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="LabelName"><FontAwesomeIcon icon={faUser} /> Elementery School:</td>
                            <td>
                                <div className="space">Dapdap Elementary School</div>
                                <div>Dapdap, Santiago, San Francisco, Cebu</div>
                                <div className="space">2008 – 2014 </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="LabelName"><FontAwesomeIcon icon={faHouse} /> High School:</td>
                            <td>
                                <div className="space">Santiago National High School</div>
                                <div>Santiago, San Francisco, Cebu</div>
                                <div className="space">2014 – 2018 </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="LabelName"><FontAwesomeIcon icon={faFolder} /> Senior High School:</td>
                            <td>
                                <div className="space">University of Cebu – Pri</div>
                                <div>J. Alcantara St., Sambag I, Cebu City</div>
                                <div className="space">2018 – 2020 </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="LabelName"><FontAwesomeIcon icon={faFolder} /> College:</td>
                            <td>
                                <div className="space">University of Cebu – Main </div>
                                <div>Sanciangko St, Cebu City</div>
                                <div className="space">2020 – Present </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}

export default AboutMe;
