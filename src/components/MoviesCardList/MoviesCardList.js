import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css'
import {MAX_SCREEN,
    MEDIUM_SCREEN,
    SMALL_SCREEN,
    AMOUNT_MORE_MAX_SCREEN,
    AMOUNT_LESS_MAX_SCREEN,
    AMOUNT_MEDIUM_SCREEN,
    AMOUNT_SMALL_SCREEN,
    STEP_MAX_SCREEN,
    STEP_MEDIUM_SCREEN,
    STEP_SMAL_SCREEN,} from '../../utils/constants'

const MoviesCardList = ({movies, savedMovies, onDelete, isLoading, isSearchError, onSavedBtn, onAdd}) => {

    const {pathname} = useLocation();
    const [movieList, setMovieList] = useState('')
    const factmovies = movies.slice(0, movieList)

    function showMoviesList() {
        const counter = { amount: AMOUNT_MORE_MAX_SCREEN, step: STEP_MAX_SCREEN } 
        if(window.innerWidth < MAX_SCREEN) {
            counter.amount = AMOUNT_LESS_MAX_SCREEN
            counter.step = STEP_MEDIUM_SCREEN
        }
        if(window.innerWidth < MEDIUM_SCREEN) {
            counter.amount = AMOUNT_MEDIUM_SCREEN
            counter.step = STEP_SMAL_SCREEN
        }
        if(window.innerWidth < SMALL_SCREEN) {
            counter.amount = AMOUNT_SMALL_SCREEN
            counter.step = STEP_SMAL_SCREEN
        }
        return counter
    };

    useEffect(() => {
        if(pathname === '/movies' ) {
            setMovieList(showMoviesList().amount)
            function showMoviesListResize() {
                if(window.innerWidth >= MAX_SCREEN) {
                    setMovieList(showMoviesList().amount)
                }
                if(window.innerWidth < MAX_SCREEN) {
                    setMovieList(showMoviesList().amount)
                }
                if(window.innerWidth < MEDIUM_SCREEN) {
                    setMovieList(showMoviesList().amount)
                }
                if(window.innerWidth < SMALL_SCREEN) {
                    setMovieList(showMoviesList().amount)
                }
            }
            window.addEventListener('resize', showMoviesListResize)
            return () => window.removeEventListener('resize', showMoviesListResize )
        }
    }, [pathname, movies])

    function clickMoreBtn() {
        setMovieList(movieList + showMoviesList().step)
    }

        return (
            <section className='movies'>

            { isLoading ? <Preloader /> :
            (pathname === '/movies' && factmovies.length !== 0) ?
            <ul className='movies__list'>
            {factmovies.map((movie) => {
                return <MoviesCard 
                key={movie.id}
                movie={movie}
                savedMovies={savedMovies}
                onSavedBtn={(movie) => onSavedBtn(movie)}
                onAdd={onAdd}
                />
            }
            )} 
            </ul>
            : movies.length !==0 ? <ul className='movies__list movies__list_saved'>
                {movies.map((movie) => {
                   return <MoviesCard 
                        key={movie._id}
                        movie={movie}
                        onDelete={onDelete}
                        isSaved={true}
                        />
                }       
                )}
            </ul> : isSearchError &&
            <span className='movies__search-error'>
                Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. 
                Подождите немного и попробуйте ещё раз
            </span>
        } 
                {pathname === '/movies' && <div className={`movies__btn-container 
                ${movieList >= movies.length && 'movies__btn-container_hidden'}`}>
                <button type='button' onClick={clickMoreBtn} className='movies__more-btn'>Еще</button>
                </div>}
            </section>
        ); 
};

export default MoviesCardList;