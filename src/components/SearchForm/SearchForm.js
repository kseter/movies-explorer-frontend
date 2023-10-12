import React from 'react';
import './SearchForm.css'

const SearchForm = () => {
    return (
        <form className='form'>
            <input type='text' className='form__search-input' placeholder='Фильм'></input>
            <button type='submit' className='form__submit-btn'></button>
        </form>
    );
};

export default SearchForm;