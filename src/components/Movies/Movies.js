import './Movies.css'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import { useCallback, useEffect, useState } from 'react';
import movieApi from '../../utils/MoviesApi';



const Movies = ({ onSavedBtn, savedMovies, onAdd }) => {

    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [searchResult, setSearchResult] = useState('');
    const [isCheckbox, setIsCheckbox] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSearchError, setIsSearchError] = useState('');

    const filter = useCallback((search, isCheckbox, movies) => {
        localStorage.setItem('search', JSON.stringify(search));
        localStorage.setItem('shorts', JSON.stringify(isCheckbox));
        localStorage.setItem('movies', JSON.stringify(movies));
        setSearchResult(search);
        setFilteredMovies(movies.filter((movie) => {
            const searchName = movie.nameRU.toLowerCase().includes(search.toLowerCase())
            return isCheckbox ? (searchName && movie.duration <= 40) : searchName
        }))
    }, [])

    function searchMovies(search) {
        if(movies.length === 0) {
            setIsLoading(true);
            movieApi.getMovies()
            .then((res) => {
                setMovies(res);
                setIsCheckbox(false)
                setIsSearchError(false)
                filter(search, isCheckbox, res)
            })
            .catch((err) => {
                setIsSearchError(true)
                console.error(`Ошибка при загрузки фильмов ${err}`)
            })
            .finally(() => setIsLoading(false))
        } else {
            filter(search, isCheckbox, movies)
        }
    }

    useEffect(() => {
        if(localStorage.search && localStorage.shorts && localStorage.movies) {
            const movies = JSON.parse(localStorage.movies)
            const search = JSON.parse(localStorage.search)
            const isCheckbox = JSON.parse(localStorage.shorts)
            setIsSearchError(false);
            setSearchResult(search)
            setIsCheckbox(isCheckbox)
            setMovies(movies)
            filter(search, isCheckbox, movies)
        }
    }, [filter]);
     
    function changeShorts(search) {
        if(isCheckbox) {
            setIsCheckbox(false)
            filter(search, false, movies)
        } else {
            setIsCheckbox(true)
            filter(search, true, movies)
        }
    }

    return (
        <div>
            <main className='movies-page'>
                <SearchForm 
                searchMovies={searchMovies}
                searchResult={searchResult}
                changeShorts={changeShorts} 
                isCheckbox={isCheckbox}
                />
                <MoviesCardList 
                movies={filteredMovies}
                savedMovies={savedMovies}
                isLoading={isLoading}
                isSearchError={isSearchError}
                onSavedBtn={onSavedBtn}
                onAdd={onAdd}
                />
            </main>
            <Footer />
        </div>
    );
};

export default Movies;