import React from 'react';
import NavTab from '../NavTab/NavTab'
import './Navigation.css'

const Navigation = () => {
        return (
            <nav className='nav'>
                <NavTab 
                name='О проекте'/> 
                <NavTab
                name='Технологии'/>
                <NavTab
                name='Студент'/>
            </nav>
        );
    }

export default Navigation;