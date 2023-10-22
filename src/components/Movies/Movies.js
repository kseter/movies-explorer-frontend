import React from 'react';
import './Movies.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

const Movies = () => {
    return (
        <div>
            <main className='movies-page'>
                <SearchForm />
                <FilterCheckbox />
                <MoviesCardList 
                isSaved={false}/>
                <div className='movies-page__btn-container'>
                    <button type='button' className='movies-page__more-btn'>Еще</button>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Movies;