import React from 'react';
import './Header.css';
import { Route, Routes } from 'react-router-dom'
import UnAuthHeader from '../UnAuthHeader/UnAuthHeader';
import AuthHeader from '../AuthHeader/AuthHeader';

const Header = () => {
        return (
            <header>
                <Routes>
                    <Route path='/'
                    element={<UnAuthHeader /> }/>
                    <Route path='/movies' 
                    element={<AuthHeader/>}/>
                    <Route path='/saved-movies' 
                    element={<AuthHeader/>}/>
                    <Route path='/profile' 
                    element={<AuthHeader/>}/>
                </Routes>
            </header>
        );
    }

export default Header;