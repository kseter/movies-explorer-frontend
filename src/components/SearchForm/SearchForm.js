import React from 'react';
import './SearchForm.css'

const SearchForm = ({savedMovies}) => {
    if(savedMovies){
        return (
            <section className='search'>
                <form className='search__form search__form_saved'>
                <input type='text' className='search__input' placeholder='Фильм' required value=''></input>
                <button type='submit' className='search__submit-btn'></button>
        </form>
            </section>
        );
    } else {
        return(
            <section className='search'>
                <form className='search__form'>
                <input type='text' className='search__input' placeholder='Фильм' required value=''></input>
                <button type='submit' className='search__submit-btn'></button>
            </form>
            </section>
        )
    }
};

export default SearchForm;