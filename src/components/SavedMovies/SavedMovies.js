import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css'

const SavedMovies = () => {
    return (
        <div className='saved-movies'>
            <SearchForm />
            <FilterCheckbox />
            <MoviesCardList 
            isSaved={true}/>
            <div className='saved-movies__divider'></div>
        </div>
    );
};

export default SavedMovies;