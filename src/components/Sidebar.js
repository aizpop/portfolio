import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faFolder, faF } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({children}) => {
    const menuItem = [
        {
            path:"/",
            name:"Home",
            icon:<FontAwesomeIcon icon={faHouse} />
        },
        {
            path:"/about",
            name:"About Me",
            icon:<FontAwesomeIcon icon={faUser} />
        },
        {
            path:"/projects",
            name:"My Projects",
            icon:<FontAwesomeIcon icon={faFolder} />
        }
    ]
    return (
        <div className="App">
            <div className="SideNav">
            {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="NavButton" activeClassName="active">
                        <div className="icon">{item.icon}</div>
                        <span className="text">{item.name}</span>
                    </NavLink>
                ))
            }
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Sidebar;