import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { useCallback, useEffect, useState } from 'react';
import './SavedMovies.css'


const SavedMovies = ({ savedMovies, onDelete }) => {

const [filteredMovies, setFilteredMovies] = useState(savedMovies);
const [searchResult, setSearchResult] = useState('');
const [isCheckbox, setIsCheckbox] = useState(false);


const filter = useCallback((search, isCheckbox, movies) => {
    setSearchResult(search)
    setFilteredMovies(movies.filter((movie) => {
        const searchName = movie.nameRU.toLowerCase().includes(search.toLowerCase())
        return isCheckbox ? (searchName && movie.duration <= 40) : searchName
    }))
}, [])

function searchMovies(search){
    filter(search, isCheckbox, savedMovies)
}

useEffect(() => {
    filter(searchResult, isCheckbox, savedMovies)
}, [filter, savedMovies, isCheckbox, searchResult])

function changeShorts() {
    if(isCheckbox) {
        setIsCheckbox(false);
        filter(searchResult, false, savedMovies)
    } else {
        setIsCheckbox(true);
        filter(searchResult, true, savedMovies)
    }
}

    return (
        <div>
            <main className='saved-movies'>
                <SearchForm 
                savedMovies={savedMovies}
                searchResult={searchResult}
                searchMovies={searchMovies}
                /> 
                <FilterCheckbox 
                changeShorts={changeShorts}
                isCheckbox={isCheckbox}
                />
                <MoviesCardList 
                movies={filteredMovies}
                onDelete={onDelete}
                />
                <div className='saved-movies__divider'></div>
            </main>
            <Footer />
        </div>
    );
};

export default SavedMovies;