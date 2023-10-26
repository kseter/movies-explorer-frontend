import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Promo.css'

const Promo = () => {
        return (
            <section className='promo'>
                <div className='promo__pad'>
                    <h1 className='promo__title'>Учебный проект студента факультета <span className='promo__title-span'>Веб-разработки</span>.</h1>
                </div>
                <Navigation />
            </section>
        );
    }

export default Promo;