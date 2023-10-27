import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <main className='error'>
            <h1 className='error__title'>404</h1>
            <p className='error__text'>Страница не найдена</p>
            <Link to='javascript:history.back()' className='error__link'>Назад</Link>
        </main>
    );
};

export default Error;