import React from 'react';
import NavTab from '../NavTab/NavTab'
import './Navigation.css'

const Navigation = () => {
        return (
            <ul className='nav'>
                <li className='nav__item'>
                    <NavTab 
                    name='О проекте'
                    link='#project'/> 
                </li>
                <li className='nav__item'>
                    <NavTab
                    name='Технологии'
                    link='#techs'/>
                </li>
                <li className='nav__item'>
                    <NavTab
                    name='Студент'
                    link='#about-me'/>
                </li>
            </ul>
        );
    }

export default Navigation;