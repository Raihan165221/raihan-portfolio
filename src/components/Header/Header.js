import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    let activeStyle = {
        color: 'tomato',
    };
    return (
        <div className='header-section'>
            <div className="header-container">
                <div className='profile-name'>
                    <h2>Raihan</h2>
                </div>
                <div className='navbar'>
                    <NavLink
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        to='/'
                    >Home</NavLink>
                    <NavLink
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        to='/about'
                    >About</NavLink>
                    <NavLink
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        to='/service'
                    >Service</NavLink>
                    <NavLink
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        to='/client'
                    >Client</NavLink>
                    <NavLink
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        to='/contact'
                    >Contact</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;