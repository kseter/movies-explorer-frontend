import React from 'react';
import './Movies.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

const Movies = () => {
    return (
        <main className='movies-page'>
            <SearchForm />
            <FilterCheckbox />
            <MoviesCardList 
            isSaved={false}/>
            <div className='movies-page__btn-container'>
                <button type='button' className='movies-page__more-btn'>Еще</button>
            </div>
        </main>
    );
};

export default Movies;