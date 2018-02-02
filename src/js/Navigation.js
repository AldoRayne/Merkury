import React, { Component } from 'react';
import Site_Logo from "./Site_Logo";

import '../styles/Nav-column.css';

class Navigation extends Component {
    render() {
        return (
            <div className='nav-column'>
                <Site_Logo/>
                <ul className='nav-column-list'>
                    <li><a className='home-link' href='#'>Home</a></li>
                    <li><a className='workflow-link' href='#'>Workflow</a></li>
                    <li><a className='statistics-link' href='#'>Statistics</a></li>
                    <li><a className='calendar-link' href='#'>Calendar</a></li>
                    <li><a className='users-link' href='#'>Users</a></li>
                    <li><a className='settings-link' href='#'>Settings</a></li>
                </ul>
            </div>
        )
    }
}

export default Navigation;
