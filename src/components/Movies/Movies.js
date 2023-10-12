import React from 'react';
import './Movies.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

const Movies = () => {
    return (
        <div>
            <SearchForm />
            <FilterCheckbox />
            <MoviesCardList 
            isSaved={false}/>
            <div className='movies__btn-container'>
                <button className='movies__more-btn'>Еще</button>
            </div>
        </div>
    );
};

export default Movies;