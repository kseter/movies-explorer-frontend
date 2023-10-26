import React from 'react';
import './FilterCheckbox.css'

const FilterCheckbox = ({changeShorts, isCheckbox}) => {


    return (
        <section className='checkbox'>
            <label>
            <input type='checkbox' onChange={() => changeShorts()} className='checkbox__input-invisible'></input>
            { isCheckbox ? <span className='checkbox__input-visible' checked></span> 
            : <span className='checkbox__input-visible'></span>}
            </label>
            <p className='checkbox__name'>Короткометражки</p>
        </section>
    );
};

export default FilterCheckbox;