import React, { useEffect } from 'react';
import useValidationForm from '../../utils/useValidationForm';
import { useLocation } from 'react-router-dom';
import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = ({savedMovies, searchMovies, searchResult, changeShorts, isCheckbox }) => {

    const pathname = useLocation();
    const { values, handleChange, reset } = useValidationForm();

    useEffect(() => {
        if((pathname === '/saved-movies' && savedMovies.length === 0)) {
            reset({search: ' '})
        } else {
            reset({search: searchResult})
        }
        //error false 
    }, [searchResult, reset, pathname, savedMovies])


    function onSubmit(evt) {
        evt.preventDefault()
        if(evt.target.search.value) {
            searchMovies(evt.target.search.value)
        } else {
            console.log('trouble')
        }
    }

    function onChange() {
        changeShorts(values.search)
    }

        return (
            <section className='search'>
                <form className='search__form' onSubmit={onSubmit}>
                <input 
                type='text' 
                name='search'
                onChange={(evt) => {
                    handleChange(evt)
                }} 
                className='search__input' 
                placeholder='Фильм' 
                value={values.search || ''} 
                disabled={savedMovies ? (savedMovies.length === 0 && true) : false}
                ></input>
                <button type='submit' className='search__submit-btn'></button> 
                </form>
                <FilterCheckbox 
                    changeShorts={onChange} 
                    isCheckbox={isCheckbox}
                />
                </section>
        );
};

export default SearchForm;