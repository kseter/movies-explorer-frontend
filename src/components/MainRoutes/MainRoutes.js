import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer.js';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';

const MainRoutes = () => {
    return (
        <div>
            <Header />
            <Routes> 
                <Route 
                    path='/'
                    element={<Main />}/>
                    <Route path='/movies'
                    element={<Movies />}/> 
                    <Route 
                    path='/saved-movies'
                    element={<SavedMovies />}/>
                    <Route path='/profile'
                    element={<Profile 
                    name='Виталий'
                    email='pochta@yandex.ru'/>}/>
                </Routes> 
                <Footer />
        </div>
    );
};

export default MainRoutes;