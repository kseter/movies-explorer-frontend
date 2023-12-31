import React from 'react';
import './Error.css'

const Error = () => {
    return (
        <main className='error'>
            <h1 className='error__title'>404</h1>
            <p className='error__text'>Страница не найдена</p>
            <a href='javascript:history.back()' className='error__link'>Назад</a>
        </main>
    );
};

export default Error;