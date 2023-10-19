import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css'

const SavedMovies = () => {
    return (
        <main className='saved-movies'>
            <SearchForm 
            savedMovies={true}/> 
            <FilterCheckbox />
            <MoviesCardList 
            isSaved={true}/>
            <div className='saved-movies__divider'></div>
        </main>
    );
};

export default SavedMovies;