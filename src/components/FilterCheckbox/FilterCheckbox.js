import React from 'react';
import './FilterCheckbox.css'

const FilterCheckbox = ({changeShorts, isCheckbox}) => {


    return (
        <section className='checkbox'>
            <label>
            {isCheckbox ? <input type='checkbox' 
            onChange={() => changeShorts()} 
            className='checkbox__input-invisible' checked
            ></input>
            : <input type='checkbox' 
            onChange={() => changeShorts()} 
            className='checkbox__input-invisible'
            ></input>}
            <span className='checkbox__input-visible'></span> 
            </label>
            <p className='checkbox__name'>Короткометражки</p>
        </section>
    );
};

export default FilterCheckbox;