import React from 'react';
import './Error.css'

const Error = () => {
    return (
        <div className='error'>
            <h2 className='error__title'>404</h2>
            <p className='error__text'>Страница не найдена</p>
            <a href="#" className='error__link'>Назад</a>

        </div>
    );
};

export default Error;