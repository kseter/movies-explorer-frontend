import React from 'react';
import './FilterCheckbox.css'

const FilterCheckbox = () => {
    return (
        <section className='checkbox'>
            <label>
            <input type='checkbox' className='checkbox__input-invisible'></input>
            <span className='checkbox__input-visible'></span>
            </label>
            <p className='checkbox__name'>Короткометражки</p>
        </section>
    );
};

export default FilterCheckbox;